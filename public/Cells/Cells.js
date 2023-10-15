class Cell {
  isAlive;
  neigbours;

  constructor(isAlive) {
    this.isAlive = isAlive;
  }

  state() {
    return this.isAlive;
  }

  die() {
    this.isAlive = false;
  }

  reBirth() {
    this.isAlive = true;
  }
}

export default Cell;
