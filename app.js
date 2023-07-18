class Note {
  constructor(container, name = '', done = false) {
    this.item = document.createElement('div');
    this.buttonGroup = document.createElement('div');
    this.nameSpan = document.createElement('span');
    this.doneButton = document.createElement('button');
    this.deleteButton = document.createElement('button');

    this.item.classList.add(
      'list-group-item',
      'd-flex',
      'justify-content-between',
      'align-items-center'
    );

    this.buttonGroup.classList.add('btn-group', 'btn-group-sn');
    this.doneButton.classList.add('btn', 'btn-success');
    this.doneButton.textContent = 'Готово';
    this.deleteButton.classList.add('btn', 'btn-danger');
    this.deleteButton.textContent = 'Удалить';

    this.buttonGroup.append(this.doneButton);
    this.buttonGroup.append(this.deleteButton);
    this.item.append(this.nameSpan);
    this.item.append(this.buttonGroup);

    container.append(this.item);
  }
}

let newNote = new Note(document.getElementById('app'));
