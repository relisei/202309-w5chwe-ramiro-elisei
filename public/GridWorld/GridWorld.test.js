import GridWorld from "./GridWorld";

describe("Given the class GridWorld constructor", () => {
  describe("When it's called with 1 and false", () => {
    test("Then it should return 1 array with 1 nested arrays of 1 cell", () => {
      const expectedLength = 1;
      const expectedBoolean = true;

      const gridWorld = new GridWorld();
      const values = gridWorld.initCell(expectedLength, expectedBoolean);

      expect(values.length).toBe(expectedLength);
      expect(values[0][0].isAlive).toBe(expectedBoolean);
    });
  });

  describe("When it's called with 4 and true", () => {
    test("Then it should return 4 array with 4 nested arrays of 4 cell", () => {
      const expectedLength = 4;
      const expectedBoolean = false;

      const gridWorld = new GridWorld();
      const values = gridWorld.initCell(expectedLength, expectedBoolean);

      expect(values.length).toBe(expectedLength);
      expect(values[0][0].isAlive).toBe(expectedBoolean);
    });
  });
});
