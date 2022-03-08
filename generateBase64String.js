// Require svg64
const svg64 = require("svg64");

// Import `readFileSync` from the file system module
const { readFileSync } = require("fs");

// Read your SVG file's contents
const svg = readFileSync("./public/images/pattern.svg", "utf-8");

// This is your SVG in base64 representation
const base64fromSVG = svg64(svg);

console.log("");
console.log("base64fromSVG: ");
console.log("polkadot pattern: ", base64fromSVG);
console.log("");
