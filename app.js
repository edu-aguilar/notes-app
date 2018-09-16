
const fs = require('fs');
const yargs = require('yargs');
const notes = require('./notes');

const argv = yargs.argv;
var command = argv._[0];

if (command === 'add') {
  notes.addNote(argv.title, argv.body);
} else if (command === 'remove') {
  console.log('remove note');
}