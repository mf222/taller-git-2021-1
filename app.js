const colors = require('colors');
const argv = require('./config/yargs');

console.clear();
console.log(`Hello ${argv.name}`.rainbow)
