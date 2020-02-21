import positiveSum from '.';

describe('positiveSum', () => {
  it('should sum all positive numbers', () => {
    expect.assertions(5);

    expect(positiveSum([1, 2, 3, 4, 5])).toStrictEqual(15);
    expect(positiveSum([1, -2, 3, 4, 5])).toStrictEqual(13);
    expect(positiveSum([])).toStrictEqual(0);
    expect(positiveSum([-1, -2, -3, -4, -5])).toStrictEqual(0);
    expect(positiveSum([-1, 2, 3, 4, -5])).toStrictEqual(9);
  });
});
