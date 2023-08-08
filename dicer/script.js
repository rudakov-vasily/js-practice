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
  const newDice = new Dice(prompt('сколько сторон?', 4)); //создается экземпляр класса

  newDice.diceRoll(); //выполняется бросок
  MyCubes.push(newDice); //добавляется в массив кубиков
  const newCube = document.createElement('div'); //создается кубик в штмл
  newCube.className = 'container__cube'; //присваимвам кубику класс
  newCube.innerText = newDice.getResult(); //выводит результат броска!!!!!-----------------------------
  const btnPlus = document.createElement('button'); //создается кнопка плюс
  newCube.appendChild(btnPlus); //добавляем плюс в кубик
  btnPlus.innerText = '+'; //устанавливаем на плюс символ +
  const sidesQty = document.createElement('p'); //создаем элемент для показа количества сторон
  sidesQty.innerText = newDice.getSides(); //берем информацию о количестве сторон
  newCube.appendChild(sidesQty); //добавляем элемент о количестве сторон в кубик

  btnPlus.addEventListener('click', () => {
    newDice.sidesPlus();
    sidesQty.innerText = newDice.getSides(); //на кнопку плюс увеличение сторон и отображение их на кубике
  });

  table.appendChild(newCube);
  if (MyCubes.length > 0) throwButton.disabled = false; //если на столе пусто то бросить кубики невозможно
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
