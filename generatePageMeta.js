//https://www.npmjs.com/package/feed

const fs = require("fs");
const path = require("path");
const sizeOf = require("image-size");

const pageSources = [
  "communities.tsx",
  "archive",
  "accessibility.tsx",
  "contact.tsx",
  "content-integrity.tsx",
  "contribute.tsx",
  "index.tsx",
  "search.tsx",
];


  const drillDownDirectory = (dirPath, truncateStart, arrayOfPages) => {
    files = fs.readdirSync(dirPath);
    arrayOfPages = arrayOfPages || {};
    files.forEach(function (file) {
      const currentItem = path.join(dirPath, file);
      if (fs.statSync(currentItem).isDirectory()) {
        arrayOfPages = drillDownDirectory(currentItem, truncateStart, arrayOfPages);
      } else {
        if (file.match(/\.(tsx)$/gi)) {
          if (file.match(/^index.tsx$/gi)) {
          }
          const relativePath = currentItem.substring(
            truncateStart,
            currentItem.length
          );
          
          arrayOfPages[relativePath] = {
            if( file === "index.tsx" ) { 
              
            } else { 
              
            }
          };
        } elseif(file.match(/^[slug].tsx$/gi) {
          // Get pages from source
        }
      }
    });
    return arrayOfPages;
  };




  // Run Script
  const data = [];

  pageSources.forEach((source) => {
    drillDownDirectory(source);
  });

  // const dirPath = path.join(process.cwd(), "public/images/");
  // const relativePathOffset = (process.cwd() + "public").length + 1;
  // const imageData = drillDownDirectory(dirPath, relativePathOffset, {});
  // console.log("Generating image meta data...", imageData);

  //   const writeToFile = (data) => {
  //   fs.writeFile("src/meta/imageData.js", data, function (err) {
  //     if (err) return console.log(err);
  //   });
  // };
  writeToFile(`export const imageData = ${JSON.stringify(imageData)};`);
