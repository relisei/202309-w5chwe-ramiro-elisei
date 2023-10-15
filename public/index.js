import Cell from "./Cells/Cells.js";
import GridWorld from "./GridWorld/GridWorld.js";

const cellLength = 10;

const cell = new Cell(false);
const gridWorld = new GridWorld(cell);

console.log(cell);
console.log(gridWorld);

gridWorld.initCell(cellLength);
