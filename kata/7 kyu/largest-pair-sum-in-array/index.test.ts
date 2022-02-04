import largestPairSum from '.';

describe('largestPairSum', () => {
  it('should find the largest pair sum in sequence', () => {
    expect.assertions(4);

    expect(largestPairSum([10, 14, 2, 23, 19])).toBe(42);
    expect(largestPairSum([-100, -29, -24, -19, 19])).toBe(0);
    expect(largestPairSum([1, 2, 3, 4, 6, -1, 2])).toBe(10);
    expect(largestPairSum([-10, -8, -16, -18, -19])).toStrictEqual(-18);
  });
});
