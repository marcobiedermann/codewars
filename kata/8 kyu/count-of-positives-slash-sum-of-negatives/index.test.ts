import countPositivesSumNegatives from '.';

describe('countPositivesSumNegatives', () => {
  it('should count positive number and sum positive numbers', () => {
    expect(
      countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]),
    ).toEqual([10, -65]);
    expect(
      countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]),
    ).toEqual([8, -50]);
  });
});
