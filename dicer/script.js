import { Dice } from './Dice.js';

const MyCubes = [];

const [throwButton] = document.getElementsByClassName('button button-all-roll');

if (MyCubes.length === 0) throwButton.disabled = true;

const [createButton] = document.getElementsByClassName(
  'button button-create-new'
);

createButton.addEventListener('click', (e) => {
  e.preventDefault();
  MyCubes.push(new Dice(prompt('сколько сторон?', 4)));
  if (MyCubes.length > 0) throwButton.disabled = false;
});

const [CH] = document.getElementsByClassName('history-log');

throwButton.addEventListener('click', (e) => {
  e.preventDefault();
  const throwResults = MyCubes.reduce((acc, cube) => {
    cube.diceRoll();
    acc += cube.getResult();
    return acc;
  }, 0);
  CH.append(`держи: ${throwResults}`);
});
