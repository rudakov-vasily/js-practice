import { Note } from './Note.js';
import { NoteList } from './NoteList.js';

let newList = new NoteList(document.getElementById('app'), 'my', [
  { name: 'posrat' },
  { name: 'kofa popit' },
]);

// let newNote = new Note(document.getElementById('app'), 'приготовить обед');

document.getElementById('action').addEventListener('click', function () {
  newList.add(prompt('что надо сделать?'));
  newList.update();
  console.log(newList);
});
