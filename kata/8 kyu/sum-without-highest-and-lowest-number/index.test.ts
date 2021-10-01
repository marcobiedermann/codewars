import sumArray from '.';

describe('sumArray', () => {
  it('should sum all numbers except the highest and lowest', () => {
    expect.assertions(4);

    expect(sumArray([6, 2, 1, 8, 10])).toBe(16);
    expect(sumArray()).toBe(0);
    expect(sumArray(null)).toBe(0);
    expect(sumArray([1])).toBe(0);
  });
});
