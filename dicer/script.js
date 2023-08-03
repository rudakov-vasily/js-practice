import { Dice } from './Dice.js';

const MyCubes = [];
const [table] = document.getElementsByClassName('container border');

const [throwButton] = document.getElementsByClassName('button button-all-roll');

if (MyCubes.length === 0) throwButton.disabled = true;

const [createButton] = document.getElementsByClassName(
  'button button-create-new'
);

createButton.addEventListener('click', (e) => {
  e.preventDefault();
  const newDice = new Dice(prompt('сколько сторон?', 4));

  newDice.diceRoll();
  MyCubes.push(newDice);
  const newCube = document.createElement('div');
  newCube.className = 'container__cube';
  newCube.innerText = newDice.getResult();
  const btnPlus = document.createElement('button');
  newCube.appendChild(btnPlus);
  btnPlus.innerText = '+';
  const sidesQty = document.createElement('p');
  sidesQty.innerText = newDice.getSides();
  newCube.appendChild(sidesQty);
  btnPlus.addEventListener('click', () => {
    newDice.sidesPlus();
    sidesQty.innerText = newDice.getSides();
  });
  table.appendChild(newCube);
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
