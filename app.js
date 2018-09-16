
const fs = require('fs');
const yargs = require('yargs');

const argv = yargs.argv;
var command = argv._[0];

console.log(`Yargs: ${JSON.stringify(argv)}`);
console.log(`Command: ${command}`);

if (command === 'add') {
  console.log('add note');
} else if (command === 'remove') {
  console.log('remove note');
}