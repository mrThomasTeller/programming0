const readlineSync = require("readline-sync");

let str = readlineSync.question("str\n> ");
let p = parseInt(readlineSync.question("p\n> "));
let l = parseInt(readlineSync.question("l\n> "));

console.log(
  str.slice(0, p) + str.slice(p, p + l).toUpperCase() + str.slice(p + l)
);
