import { Dice } from './Dice.js';

const createNew = document.querySelector('.button-create-new');
createNew.addEventListener('click', function () {
  let Cube = new Dice(document.querySelector('.container'));
});

let Cube = new Dice(document.querySelector('.container'));
// console.log(Cube1);
// let Cube2 = new Dice(document.querySelector('.container'), 2);
// let Cube3 = new Dice(document.querySelector('.container'), 3);
// let Cube4 = new Dice(document.querySelector('.container'), 4);

const btnAllRoll = document.querySelector('.button-all-roll');
// console.log(btnAll);

function triggerButton1Click() {
  document.querySelectorAll('.button-roll').forEach(function (el) {
    el.dispatchEvent(new Event('click'));
  });
}
btnAllRoll.addEventListener('click', function () {
  triggerButton1Click();
});
