class Cell {
  isAlive;

  constructor(isAlive) {
    this.isAlive = isAlive;
  }

  die() {
    this.isAlive = false;
  }

  reBirth() {
    this.isAlive = true;
  }
}

export default Cell;
