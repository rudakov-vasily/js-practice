import { Note } from './Note.js';

let newNote = new Note(document.getElementById('app'), 'приготовить обед');

document.getElementById('action').addEventListener('click', function () {
  let newNote = new Note(
    document.getElementById('app'),
    prompt('что надо сделать?')
  );
});
