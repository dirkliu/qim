'use strict';

// src/foo.js
var foo = 'hello world!';
console.log('foo:', foo)
// src/main.js
function main () {
  console.log(foo);
}

module.exports = main;
