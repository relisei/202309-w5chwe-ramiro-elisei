import GridWorld from "./GridWorld/GridWorld.js";

const gridWorld = new GridWorld();

gridWorld.initCell(3, false);

gridWorld.cell[1][1].reBirth();
gridWorld.cell[2][0].reBirth();
gridWorld.cell[2][1].reBirth();

gridWorld.countNeighbours(0, 2);

console.log(gridWorld.cell[0][2].neigbours);
