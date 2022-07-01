import isDivisible from '.';

describe('isDivisible', () => {
  it('should check if product is divisible by number', () => {
    expect(isDivisible(4050, 27)).toBe(true);
    expect(isDivisible(4066, 27)).toBe(false);
    expect(isDivisible(10000, 20)).toBe(true);
    expect(isDivisible(10005, 20)).toBe(false);
    expect(isDivisible(10005, 1)).toBe(true);
  });
});
