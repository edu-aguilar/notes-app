
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

var addNote = (title, note) => {

  var notes = fetchNotes();
  var note = {
    title,
    note
  }

  var existsDuplicatedNote = notes.some(note => note.title === title);

  if (!existsDuplicatedNote) {
    notes.push(note);
    saveNotes(notes);
  }
  
}

var getAll = () => {

}

var getNote = (title) => {

}

var removeNote = (title) => {

}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
}