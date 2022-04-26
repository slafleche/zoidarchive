//https://www.npmjs.com/package/feed

import fs from "fs";
import path, { relative } from "path";

const drillDownDirectory = (
  dirPath,
  arrayOfPages,
  cwd = path.join(process.cwd(), "pages")
) => {
  const files = fs.readdirSync(dirPath);
  files.forEach(function (file) {
    if (file !== "api" && file.endsWith(".tsx") && !file.startsWith("_")) {
      const currentPath = path.join(dirPath, file === "index.tsx" ? "" : file);
      if (file === "[slug].tsx") {
        // Get Files from source
        const slugs = currentPath.split("/");
        const categoryName = slugs[slugs.length - 2];
        const categoryPath = path.resolve(
          process.cwd(),
          "src",
          "archive",
          categoryName
        );
        arrayOfPages = drillDownDirectory(
          categoryPath,
          arrayOfPages,
          categoryPath
        );
      } else if (fs.statSync(path.join(dirPath, file)).isDirectory()) {
        // Directory, drill down
        arrayOfPages = drillDownDirectory(currentPath, arrayOfPages);
      } else {
        // Actual page
        const slugs = currentPath.split("/");
        const parentPath = slugs
          .slice(cwd.length + 1, slugs.length - 1)
          .join("/");
        const parentUrl =
          parentPath === ""
            ? "/"
            : parentPath.substring(cwd.length, parentPath.length);
        const slug = file.replaceAll(/\.tsx$/gi, "").replaceAll(/index$/gi, "");
        const category = parentUrl === "/" ? "root" : slugs[slugs.length - 2];

        arrayOfPages.push({
          file,
          parentUrl,
          slug,
          category,
          url: `${parentUrl}${slug === "/" ? "" : slug}`,
        });
      }
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
  const pageData = drillDownDirectory(path.join(process.cwd(), "pages"), []);
  console.log("Generating page meta data...", pageData);
  writeToFile(`export const pageData = ${JSON.stringify(pageData)};`);
};

generatePageMeta();
