import './script.js-import.js';

/* This should be removed during build */

console.log('Testing build of script.js');

const colours = ['red', 'green', 'blue'];

// Array.prototype.includes requires a polyfill for use in IE
console.log(colours.includes('red'));


