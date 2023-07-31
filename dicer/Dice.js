import { Result } from './Result.js';

export class Dice {
  result = '';

  constructor(container) {
    this.dice = document.createElement('div');
    this.dice.classList.add('container__cube', 'border');

    // ------------------
    // this.cubeNumber = cubeNumber;
    // this.title = document.createElement('h4');
    // this.title.textContent = `кубик номер ${cubeNumber}`;
    this.facesQty = document.createElement('p');
    this.facesQty.textContent = 'количество граней';
    this.btnMoreFaces = document.createElement('button');
    this.btnMoreFaces.classList.add('button_more-faces');
    this.btnMoreFaces.textContent = '+';
    this.btnLessFaces = document.createElement('button');
    this.btnLessFaces.classList.add('button_less-faces');
    this.btnLessFaces.textContent = '-';
    this.cubesFaces = document.createElement('p');
    this.cubesFaces.classList.add('cubes-faces');
    this.cubesFaces.textContent = '-';
    this.btnDiceRoll = document.createElement('button');
    this.btnDiceRoll.classList.add('button', 'button-roll');
    this.btnDiceRoll.textContent = 'бросить кубик';
    this.diceResult = document.createElement('p');
    this.diceResult.classList.add('dice-result');
    this.diceResult.textContent = '-';
    this.diceDelete = document.createElement('button');
    this.diceDelete.classList.add('button', 'button-delete');
    this.diceDelete.textContent = 'удалить кубик';

    //-------------------------
    // this.dice.append(this.title);
    this.dice.append(this.facesQty);
    this.dice.append(this.btnMoreFaces);
    this.dice.append(this.btnLessFaces);
    this.dice.append(this.cubesFaces);
    this.dice.append(this.btnDiceRoll);
    this.dice.append(this.diceResult);
    this.dice.append(this.diceDelete);
    container.append(this.dice);

    this.i = 0;
    this.cubesFacesArray = [4, 6, 8, 10, 12, 20];
    //кнопка БОЛЬШЕ СТОРОН КУБИКА
    this.btnMoreFaces.addEventListener('click', () => {
      if (this.cubesFaces.textContent === '-') {
        /**вначале стоит - , 
  с ним нельзя кинуть кубик, кнопка ставит значение на первый элемент массива*/
        this.cubesFaces.innerHTML = this.cubesFacesArray[this.i];
      } else if (this.i < 5) {
        this.i++;
        this.cubesFaces.innerHTML = this.cubesFacesArray[this.i];
      }
    });

    //кнопка МЕНЬШЕ СТОРОН КУБИКА
    this.btnLessFaces.addEventListener('click', () => {
      if (this.i > 0) {
        this.i--;
        this.cubesFaces.innerHTML = this.cubesFacesArray[this.i];
      }
    });

    //кнопка БРОСОК КУБИКА
    this.btnDiceRoll.addEventListener('click', () => {
      if (this.cubesFaces.textContent !== '-') {
        this.diceResult.innerHTML = this.diceRoll();

        this.result = `D${this.cubesFacesArray[this.i]}: ${
          this.diceResult.textContent
        }`;
        let result = new Result(
          document.querySelector('.history-log'),
          this.cubesFacesArray[this.i],
          this.diceResult.textContent
        );
        console.log(this.result);
      }
    });

    this.diceDelete.addEventListener('click', () => this.dice.remove());
  } //конец конструктора тут
  //методы----------------
  diceRoll() {
    return Math.ceil(Math.random() * this.cubesFacesArray[this.i]);
  }

  // setResult(result) {
  //   this.result = result;
  // }

  // getResult() {
  //   return this.result;
  // }
}
