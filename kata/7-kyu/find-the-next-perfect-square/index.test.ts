import findNextSquare from '.';

describe('findNextSquare', () => {
  it('should return the next square for perfect squares', () => {
    expect(findNextSquare(121)).toEqual(144);
    expect(findNextSquare(625)).toEqual(676);
    expect(findNextSquare(319225)).toEqual(320356);
    expect(findNextSquare(15241383936)).toEqual(15241630849);
  });

  it("should return -1 for numbers which aren't perfect squares", () => {
    expect(findNextSquare(155)).toEqual(-1);
    expect(findNextSquare(342786627)).toEqual(-1);
  });
});
