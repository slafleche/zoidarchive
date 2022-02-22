console.log('hello world');


// Babel test: 
const x = ['a', 'b'];
x.forEach(y => console.log(y));

// Should output:
// "use strict";

// require("core-js/modules/es.array.for-each");

// var x = ['a', 'b'];
// x.forEach(function (y) {
//   return console.log(y);
// });

