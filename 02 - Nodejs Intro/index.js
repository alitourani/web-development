// Below command provides the capability of modularity for JS
const toBeRequired = require('./toBeRequired');
const toExportFunction = require('./toExportFunction');
const toExportClass = require('./toExportClass');

// Exports some data
console.log('😍 The values exported from toBeRequired.js are:', toBeRequired, '\n');

// Exports a function
const currentTime = toExportFunction();
console.log('⏲️ This time is calculated by a function in toExportFunction.js:', currentTime, '\n');

// Exports a class
const classObject = new toExportClass(5, 10);
console.log('⏲️ The number below is calculated by a class in toExportClass.js:', classObject._calculateAdd(), '\n');

console.log('This sample showed the functionality of Node.js with an emphasis on modularity');