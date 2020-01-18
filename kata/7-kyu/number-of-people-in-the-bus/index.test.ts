import number from ".";

describe("number", () => {
  it("return number of people sitting in bus after last bus station", () => {
    expect(
      number([
        [10, 0],
        [3, 5],
        [5, 8]
      ])
    ).toEqual(5);
    expect(
      number([
        [3, 0],
        [9, 1],
        [4, 10],
        [12, 2],
        [6, 1],
        [7, 10]
      ])
    ).toEqual(17);
    expect(
      number([
        [3, 0],
        [9, 1],
        [4, 8],
        [12, 2],
        [6, 1],
        [7, 8]
      ])
    ).toEqual(21);
  });
});
