import squareArea from '.';

describe('squareAre', () => {
  it('should return the area of the square', () => {
    expect.assertions(3);

    expect(squareArea(2)).toStrictEqual(1.62);
    expect(squareArea(0)).toStrictEqual(0);
    expect(squareArea(14.05)).toStrictEqual(80);
  });
});
