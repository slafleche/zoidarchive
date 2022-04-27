import fs from "fs";
import path from "path";
import sizeOf from "image-size";
import chalk from "chalk";

const cacheImageMetaFromDir = (dirPath, truncateStart, arrayOfFiles) => {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || {};
  files.forEach(function (file) {
    const currentItem = path.join(dirPath, file);
    if (fs.statSync(currentItem).isDirectory()) {
      arrayOfFiles = cacheImageMetaFromDir(
        currentItem,
        truncateStart,
        arrayOfFiles
      );
    } else {
      if (file.match(/\.(jpg|jpeg|png|gif|webp)$/gi)) {
        const relativePath = currentItem.substring(
          truncateStart,
          currentItem.length
        );
        const data = sizeOf(currentItem);
        arrayOfFiles[relativePath] = {
          ...data,
          type: `image/${data.type}`,
          ratio: data.width / data.height,
        };
      }
    }
  });
  return arrayOfFiles;
};

const writeToFile = (data) => {
  fs.writeFile("src/meta/imageData.js", data, function (err) {
    if (err) return console.log(err);
  });
};

// Run Script
export const generateImageMeta = () => {
  const dirPath = path.join(process.cwd(), "public/images/");
  const relativePathOffset = (process.cwd() + "public").length + 1;
  const imageData = cacheImageMetaFromDir(dirPath, relativePathOffset, {});
  console.log(chalk.cyan("\nGenerating image meta data:\n"), imageData);
  writeToFile(
    `export const imageData = ${JSON.stringify(imageData, null, 2)};`
  );
};

generateImageMeta();
