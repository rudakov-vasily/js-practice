import { ToDo } from './ToDo.js';

let app = new ToDo(document.getElementById('app'));

app.addUser('покупки', 'shop');

app.addUser('информация', 'info');
