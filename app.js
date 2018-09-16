
const fs = require('fs');
const yargs = require('yargs');
const notes = require('./notes');

const argv = yargs.argv;
var command = argv._[0];

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (!note) {
    console.log('error adding your note');
  } else {
    console.log(`note added properly: ${JSON.stringify(note)}`);
  }
} else if (command === 'remove') {
  console.log('remove note');
}