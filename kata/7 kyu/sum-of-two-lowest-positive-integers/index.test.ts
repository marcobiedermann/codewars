import sumTwoSmallestNumbers from '.';

describe('sumTwoSmallestNumbers', () => {
  it('should sum the two lowest positive integers', () => {
    expect.assertions(5);

    expect(sumTwoSmallestNumbers([5, 8, 12, 19, 22])).toStrictEqual(13);
    expect(sumTwoSmallestNumbers([15, 28, 4, 2, 43])).toStrictEqual(6);
    expect(sumTwoSmallestNumbers([3, 87, 45, 12, 7])).toStrictEqual(10);
    expect(sumTwoSmallestNumbers([23, 71, 33, 82, 1])).toStrictEqual(24);
    expect(sumTwoSmallestNumbers([52, 76, 14, 12, 4])).toStrictEqual(16);
  });
});
