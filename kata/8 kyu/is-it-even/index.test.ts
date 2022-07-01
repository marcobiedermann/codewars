import testEven from '.';

describe('testEven', () => {
  it('should check if number is even', () => {
    expect(testEven(0)).toBe(true);
    expect(testEven(0.5)).toBe(false);
    expect(testEven(1)).toBe(false);
    expect(testEven(2)).toBe(true);
    expect(testEven(-4)).toBe(true);
  });
});
