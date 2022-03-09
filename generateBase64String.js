const readline = require("readline");
const svg64 = require("svg64");
const { readFileSync } = require("fs");

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

const svgs = [
  {
    label: "Polka Dots",
    source: "./src/svgs/pattern.svg",
  },
  {
    label: "web",
    source: "./src/svgs/web.svg",
  },
  {
    label: "prism",
    source: "./src/svgs/prism.svg",
  },
];

const printAll = () => {
  console.log("");
  console.log("base64fromSVG: ");
  for (var i = 0; i < svgs.length; i++) {
    const { label, source } = svgs[i];
    console.log(`${label}: \n${svg64(readFileSync(source, "utf-8"))}`);
    console.log("");
  }
};

const printOne = (svgNo) => {
  const { label, source } = svgs[svgNo];
  console.log(`\n${label}: \n${svg64(readFileSync(source, "utf-8"))}\n`);
};

const getData = (svgNo) => {
  try {
    return svg64(readFileSync(svgs[svgNo].source, "utf-8"));
  } catch (e) {
    console.log("\nInvalid Selection, try again...\n");
  }
};

let menu = `Would you like to:\n
(A) Print all SVGs?\n`;
for (var i = 0; i < svgs.length; i++) {
  menu += `(${i}) Print out "${svgs[i].source}")\n`;
}
menu += "\n";

function askQuestion(query) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(menu, (option) => {
    if (option == "a") {
      printAll();
    } else {
      const result = getData(option);
      console.log(result);
      pbcopy(result);
      console.log("\nCopied to clipboard!\n");
      process.exit(0);
    }
  });
}

askQuestion(menu);
