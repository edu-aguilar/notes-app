
const fs = require('fs');
const yargs = require('yargs');
const notes = require('./notes');
const yargsConfig = require('./yargsConfig');

const argv = yargsConfig.init(yargs).help().argv;
var command = argv._[0];

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (!note) {
    console.log('error adding your note');
  } else {
    console.log(`note added properly: ${JSON.stringify(note)}`);
  }
} else if (command === 'remove') {
  var isNoteRemoved = notes.removeNote(argv.title);
  var result = isNoteRemoved ? 'Note was removed' : 'Note not found';
  console.log(result);
} else if (command === 'read') {
  var note = notes.getNote(argv.title);
  var result = note ? `selected note: ${JSON.stringify(note)}` : 'Note not found';
  console.log(result);
} else if (command === 'list') {
  let allNotes = notes.getAll();
  allNotes.forEach(note => {
    console.log(`${note.title} - ${note.body}`);
  });
}