const fs = require("fs");
const path = require("path");
const sizeOf = require("image-size");

const getImageData = (dirPath, truncateStart, arrayOfFiles) => {
  files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || {};
  files.forEach(function (file) {
    const currentItem = path.join(dirPath, file);
    if (fs.statSync(currentItem).isDirectory()) {
      arrayOfFiles = getImageData(currentItem, truncateStart, arrayOfFiles);
    } else {
      if (file.match(/\.(jpg|jpeg|png|gif|webp)$/gi)) {
        const relativePath = currentItem.substring(
          truncateStart,
          currentItem.length
        );

        const data = sizeOf(currentItem);
        arrayOfFiles[relativePath] = data;
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
const dirPath = path.join(process.cwd(), "public/images/");
const relativePathOffset = (process.cwd() + "public").length + 1;
const imageData = getImageData(dirPath, relativePathOffset, {});
console.log("Generating image meta data...", imageData);
writeToFile(`export const imageData = ${JSON.stringify(imageData)};`);
