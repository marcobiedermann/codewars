import maxDiff from '.';

describe('maxDiff', () => {
  it('should return difference between the biggest and the smallest value', () => {
    expect(maxDiff([0, 1, 2, 3, 4, 5, 6])).toBe(6);
    expect(maxDiff([-0, 1, 2, -3, 4, 5, -6])).toBe(11);
    expect(maxDiff([0, 1, 2, 3, 4, 5, 16])).toBe(16);
    expect(maxDiff([16])).toBe(0);
    expect(maxDiff([])).toBe(0);
  });
});
