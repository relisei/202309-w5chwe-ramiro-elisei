class Cell {
  isAlive;

  die() {
    this.isAlive = false;
  }

  reBirth() {
    this.isAlive = true;
  }
}

export default Cell;
