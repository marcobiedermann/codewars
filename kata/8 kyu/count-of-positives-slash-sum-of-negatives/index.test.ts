import countPositivesSumNegatives from '.';

describe('countPositivesSumNegatives', () => {
  it('should count positive number and sum positive numbers', () => {
    expect.assertions(2);

    expect(
      countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]),
    ).toStrictEqual([10, -65]);
    expect(
      countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]),
    ).toStrictEqual([8, -50]);
  });
});
