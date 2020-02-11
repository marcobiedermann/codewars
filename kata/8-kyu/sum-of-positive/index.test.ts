import positiveSum from '.';

describe('positiveSum', () => {
  it('should sum all positive numbers', () => {
    expect(positiveSum([1, 2, 3, 4, 5])).toEqual(15);
    expect(positiveSum([1, -2, 3, 4, 5])).toEqual(13);
    expect(positiveSum([])).toEqual(0);
    expect(positiveSum([-1, -2, -3, -4, -5])).toEqual(0);
    expect(positiveSum([-1, 2, 3, 4, -5])).toEqual(9);
  });
});
