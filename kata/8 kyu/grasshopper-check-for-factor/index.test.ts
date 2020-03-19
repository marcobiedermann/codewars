import checkForFactor from '.';

describe('checkForFactor', () => {
  it('should return true', () => {
    expect.assertions(4);

    expect(checkForFactor(10, 2)).toStrictEqual(true);
    expect(checkForFactor(63, 7)).toStrictEqual(true);
    expect(checkForFactor(2450, 5)).toStrictEqual(true);
    expect(checkForFactor(24612, 3)).toStrictEqual(true);
  });

  it('should return false', () => {
    expect.assertions(4);

    expect(checkForFactor(9, 2)).toStrictEqual(false);
    expect(checkForFactor(653, 7)).toStrictEqual(false);
    expect(checkForFactor(2453, 5)).toStrictEqual(false);
    expect(checkForFactor(24617, 3)).toStrictEqual(false);
  });
});
