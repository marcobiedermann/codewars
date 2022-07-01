import checkForFactor from '.';

describe('checkForFactor', () => {
  it('should return true', () => {
    expect(checkForFactor(10, 2)).toBe(true);
    expect(checkForFactor(63, 7)).toBe(true);
    expect(checkForFactor(2450, 5)).toBe(true);
    expect(checkForFactor(24612, 3)).toBe(true);
  });

  it('should return false', () => {
    expect(checkForFactor(9, 2)).toBe(false);
    expect(checkForFactor(653, 7)).toBe(false);
    expect(checkForFactor(2453, 5)).toBe(false);
    expect(checkForFactor(24617, 3)).toBe(false);
  });
});
