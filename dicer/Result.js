export class Result {
  constructor(container, dQty, res) {
    this.res = document.createElement('p');

    this.res.textContent = `D${dQty}: ${res}`;

    container.append(this.res);
  }
}
