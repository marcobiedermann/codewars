import sumEvenNumbers from '.';

describe('sumEvenNumbers', () => {
  it('should return the sum of the even values', () => {
    expect(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(30);
  });
});
