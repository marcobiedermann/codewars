import isSquare from '.';

describe('isSquare', () => {
  it('should check if number is square', () => {
    expect.assertions(6);

    expect(isSquare(-1)).toStrictEqual(false);
    expect(isSquare(0)).toStrictEqual(true);
    expect(isSquare(3)).toStrictEqual(false);
    expect(isSquare(4)).toStrictEqual(true);
    expect(isSquare(25)).toStrictEqual(true);
    expect(isSquare(26)).toStrictEqual(false);
  });
});
