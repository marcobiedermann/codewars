import maxTriSum from '.';

describe('maxTriSum', () => {
  it('should return maximum sum of triplets', () => {
    expect.assertions(10);

    expect(maxTriSum([3, 2, 6, 8, 2, 3])).toStrictEqual(17);
    expect(maxTriSum([2, 9, 13, 10, 5, 2, 9, 5])).toStrictEqual(32);
    expect(maxTriSum([2, 1, 8, 0, 6, 4, 8, 6, 2, 4])).toStrictEqual(18);
    expect(maxTriSum([-3, -27, -4, -2, -27, -2])).toStrictEqual(-9);
    expect(maxTriSum([-14, -12, -7, -42, -809, -14, -12])).toStrictEqual(-33);
    expect(maxTriSum([-13, -50, 57, 13, 67, -13, 57, 108, 67])).toStrictEqual(232);
    expect(maxTriSum([-7, 12, -7, 29, -5, 0, -7, 0, 0, 29])).toStrictEqual(41);
    expect(maxTriSum([-2, 0, 2])).toStrictEqual(0);
    expect(maxTriSum([-2, -4, 0, -9, 2])).toStrictEqual(0);
    expect(maxTriSum([-5, -1, -9, 0, 2])).toStrictEqual(1);
  });
});
