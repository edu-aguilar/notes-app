
const fs = require('fs');

var fetchNotes = () => {

  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }

}

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = (title, body) => {

  var notes = fetchNotes();
  var note = {
    title,
    body
  }

  var existsDuplicatedNote = notes.some(note => note.title === title);

  if (!existsDuplicatedNote) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }

  return null;
}

var getAll = () => {

}

var getNote = (title) => {
  var notes = fetchNotes();
  return notes.find(note => note.title === title);
}

var removeNote = (title) => {

  var notes = fetchNotes();
  var index = notes.findIndex(note => note.title === title);

  if (index > -1) {
    notes.splice(index, 1);
    saveNotes(notes);
    return true;
  }
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
}