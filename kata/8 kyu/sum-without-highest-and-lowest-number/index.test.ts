import sumArray from '.';

describe('sumArray', () => {
  it('should sum all numbers except the highest and lowest', () => {
    expect.assertions(4);

    expect(sumArray([6, 2, 1, 8, 10])).toStrictEqual(16);
    expect(sumArray()).toStrictEqual(0);
    expect(sumArray(null)).toStrictEqual(0);
    expect(sumArray([1])).toStrictEqual(0);
  });
});
