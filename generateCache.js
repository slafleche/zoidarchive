const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

function generateCache() {
  const postsDirectory = path.join(process.cwd(), "pages/resources/books");

  const fileNames = fs.readdirSync(postsDirectory);
  const books = fileNames.map((fileName) => {
    const id = fileName.replace(/\.mdx?$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    return {
      id,
      title: matterResult.data.title,
    };
  });
  return `export const books = ${JSON.stringify(books)};`;
}

try {
  fs.readdirSync("cache");
} catch (e) {
  fs.mkdirSync("cache");
}

fs.writeFile("cache/data.js", generateCache(), function (err) {
  if (err) return console.log(err);
  console.log("Site cached.");
});
