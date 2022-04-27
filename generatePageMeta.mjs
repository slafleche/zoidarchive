//https://www.npmjs.com/package/feed

import fs from "fs";
import path from "path";
import chalk from "chalk";

const getParentSlug = (url, offset = 2) => {
  const slugs = url.split("/");
  return slugs[slugs.length - offset];
};

const drillDownDirectory = ({
  dirPath,
  arrayOfPages,
  cwd = path.join(process.cwd(), "pages"),
  mappedPath,
  depth,
}) => {
  if (!arrayOfPages) {
    arrayOfPages = [];
  }
  const files = fs.readdirSync(dirPath);
  files.forEach(function (file) {
    const spacer = `${" ".repeat(depth && depth > 0 ? depth : 0)}${
      depth && depth > 0 ? "└─" : ""
    }`;

    if (file === "api" || file.startsWith(".") || file.startsWith("_")) {
      return;
    }

    let currentPath = path.join(dirPath, file);
    const message = `${spacer}${currentPath.substring(
      cwd.length,
      currentPath.length
    )}`;
    if (depth > 0) {
      console.log(chalk.cyan(message));
    } else {
      console.log(message);
    }

    if (fs.statSync(currentPath).isDirectory()) {
      // Is directory, drill down
      // console.log(`${spacer}  > drill into folder "${file}":`);
      arrayOfPages = drillDownDirectory({
        dirPath: currentPath,
        arrayOfPages,
        depth: (depth || 0) + 2,
      });
    } else if (file === "[slug].tsx") {
      // Get Files from source
      const categoryName = getParentSlug(currentPath);
      const srcPath = path.resolve(
        process.cwd(),
        "src",
        "archive",
        categoryName
      );
      arrayOfPages = drillDownDirectory({
        dirPath: srcPath,
        arrayOfPages,
        mappedPath: dirPath,
        cwd: path.join(process.cwd(), "src"),
        depth: (depth || 0) + 1,
      });
    } else {
      if (mappedPath) {
        console.log(
          chalk.redBright(
            `${" ".repeat(depth)} *` +
              mappedPath.substring(process.cwd().length, mappedPath.length) +
              " (MAP)"
          )
        );
        currentPath = mappedPath;
      }
      const slugs = currentPath.split("/");
      const parentPath = slugs
        .slice(cwd.length + 1, slugs.length - 1)
        .join("/");
      const parentUrl =
        parentPath === ""
          ? "/"
          : parentPath.substring(cwd.length, parentPath.length);

      const slug = file.replaceAll(/\.tsx$/gi, "").replaceAll(/index$/gi, "/");
      const category = parentUrl === "/" ? "root" : slugs[slugs.length - 2];

      const data = {
        mappedPath,
        file,
        parentUrl,
        slug,
        category,
        url: `${parentUrl}${slug === "/" ? "" : slug}`,
      };
      arrayOfPages.push(data);
    }
  });
  return arrayOfPages;
};

const writeToFile = (data) => {
  fs.writeFile("src/meta/pageData.js", data, function (err) {
    if (err) return console.log(err);
  });
};

// Run Script
export const generatePageMeta = () => {
  const pageData = drillDownDirectory({
    dirPath: path.join(process.cwd(), "pages"),
    depth: -1,
  });

  // pageData.sort((a, b) => {
  //   if (a.url < b.url) {
  //     return -1;
  //   } else if (a.url > b.url) {
  //     return 1;
  //   } else {
  //     return 0;
  //   }
  // });
  console.log(
    chalk.green(`\nGenerated Page Meta Data in "/src/meta/pageData.js"\n`)
  );
  writeToFile(`export const pageData = ${JSON.stringify(pageData, null, 2)};`);
};

console.log("");
generatePageMeta();

// Fix default meta data (Open Graph)
// Fix paths
