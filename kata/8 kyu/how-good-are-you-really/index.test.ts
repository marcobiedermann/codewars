import betterThanAverage from '.';

describe('example Tests', () => {
  it('betterThanAverage([2, 3], 5) should return True', () => {
    expect.assertions(1);

    expect(betterThanAverage([2, 3], 5)).toBe(true);
  });

  it('betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75) should return True', () => {
    expect.assertions(1);

    expect(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)).toBe(true);
  });

  it('betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9) should return False', () => {
    expect.assertions(1);

    expect(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9)).toBe(false);
  });
});
