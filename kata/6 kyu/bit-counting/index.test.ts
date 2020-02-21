import countBits from '.';

describe('countBits', () => {
  it('should return the number of bits what are one', () => {
    expect.assertions(5);

    expect(countBits(0)).toStrictEqual(0);
    expect(countBits(4)).toStrictEqual(1);
    expect(countBits(7)).toStrictEqual(3);
    expect(countBits(9)).toStrictEqual(2);
    expect(countBits(10)).toStrictEqual(2);
  });
});
