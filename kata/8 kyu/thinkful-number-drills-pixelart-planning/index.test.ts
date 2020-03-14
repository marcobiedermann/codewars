import isDivisible from '.';

describe('isDivisible', () => {
  it('should check if product is divisible by number', () => {
    expect.assertions(5);

    expect(isDivisible(4050, 27)).toStrictEqual(true);
    expect(isDivisible(4066, 27)).toStrictEqual(false);
    expect(isDivisible(10000, 20)).toStrictEqual(true);
    expect(isDivisible(10005, 20)).toStrictEqual(false);
    expect(isDivisible(10005, 1)).toStrictEqual(true);
  });
});
