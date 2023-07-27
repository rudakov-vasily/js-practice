//значение СТОРОН КУБИКА
let cubesFaces = document.querySelector('.cubes-faces');
console.log(cubesFaces);
console.log(cubesFaces.textContent);

//возможные значения сторон кубика
const cubesFacesArray = [4, 6, 8, 10, 12, 20];

//кнопка БОЛЬШЕ СТОРОН КУБИКА
const btnMoreFaces = document.querySelector('.button_more-faces');

let i = 0;

btnMoreFaces.addEventListener('click', () => {
  if (cubesFaces.textContent === '-') {
    /**вначале стоит - , 
  с ним нельзя кинуть кубик, кнопка ставит значение на первый элемент массива*/
    cubesFaces.innerHTML = cubesFacesArray[i];
    console.log(i);
  } else if (i < 5) {
    i++;
    cubesFaces.innerHTML = cubesFacesArray[i];
    console.log(i);
  }
});

//кнопка МЕНЬШЕ СТОРОН КУБИКА
const btnLessFaces = document.querySelector('.button_less-faces');
btnLessFaces.addEventListener('click', () => {
  if (i > 0) {
    i--;
    cubesFaces.innerHTML = cubesFacesArray[i];
    console.log(i);
  }
});

//значение БРОСКА КУБИКА
let diceResult = document.querySelector('.dice-result');

//кнопка БРОСОК КУБИКА
const btnDiceRoll = document.querySelector('.button-roll');
btnDiceRoll.addEventListener('click', () => {
  if (cubesFaces.textContent !== '-') {
    console.log('ROLL');
    const diceRoll = () => Math.ceil(Math.random() * cubesFacesArray[i]);
    console.log(diceRoll());

    diceResult.innerHTML = diceRoll();
  }
});
