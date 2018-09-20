
var addNote = () => {
  return {
    title: {describe: 'Title for note', demand: true, alias: 't'},
    body: {describe: 'Body for note', demand: true, alias: 'b'}
  }
}

var removeNote = () => {
  return {
    title: {describe: 'Title for note', demand: true, alias: 't'}
  }
}

var getNote = () => {
  return {
    title: {describe: 'Title for note', demand: true, alias: 't'}
  }
}

var init = (yargs) => {
  return yargs
    .command('add', 'Add a new note', addNote())
    .command('list', 'List all notes')
    .command('remove', 'Remove a single note', removeNote())
    .command('read', 'Read a single note', getNote())
}

module.exports = {
  init
}