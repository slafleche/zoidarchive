const readline = require("readline");
const svg64 = require("svg64");
const { readFileSync } = require("fs");
const path = require("path");
const fs = require("fs");

const directoryPath = path.join(__dirname, "src/svgs");

function pbcopy(data) {
  return new Promise(function (resolve, reject) {
    const proc = require("child_process").spawn("pbcopy");
    proc.on("error", function (err) {
      reject(err);
    });
    proc.on("close", function (err) {
      resolve();
    });
    proc.stdin.write(data);
    proc.stdin.end();
  });
}

const listAllSVGs = (svgs) => {
  var output = "\n";
  // console.log("svgs: ", svgs);

  for (var i = 0; i < svgs.length; i++) {
    const { label, source } = svgs[i];
    output += `${label}: \n\n${svg64(readFileSync(source, "utf-8"))}\n\n`;
  }
  return output;
};

const getSVGsFromFolder = () => {
  const svgs = [];
  return new Promise((resolve, reject) => {
    fs.readdir(directoryPath, function (error, data) {
      if (error) {
        reject(error);
      } else {
        data.forEach(function (svg) {
          svgs.push({
            label: svg,
            source: path.resolve(directoryPath, svg),
          });
        });
        resolve(svgs);
      }
    });
  });
};

const getUserInput = (menu, svgs) => {
  return new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question(menu, (answer) => {
      if (answer == "a") {
        const allSvgs = listAllSVGs(svgs);
        console.log("\n");
        console.log(allSvgs);
        console.log("\n\n");
        resolve(allSvgs);
      } else {
        try {
          const svg = svgs[answer];
          const data = svg64(readFileSync(path.resolve(svg.source), "utf-8"));
          pbcopy(data);
          resolve(data + "\n\nCopied to clipboard!\n");
        } catch (error) {
          console.log("\nInvalid Selection, try again...\n");
          process.exit(1);
          reject(error);
        }
      }
    });
  });
};

getSVGsFromFolder().then(
  (svgs) => {
    let menu = `Would you like to:\n(A) Print all SVGs?\n`;
    for (var i = 0; i < svgs.length; i++) {
      menu += `(${i}) Print out "${svgs[i].source}")\n`;
    }
    menu += "\n";

    try {
      getUserInput(menu, svgs).then((result) => {
        console.log(`\n${result}`);
        process.exit(0);
      });
    } catch (error) {
      console.log("\n error processing folders: ", error);
      process.exit(1);
    }
  },
  (error) => {
    console.log("Unable to read SVGs in directory: " + error);
    process.exit(1);
  }
);
