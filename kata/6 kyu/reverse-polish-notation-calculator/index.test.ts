import calc from '.';

describe('calc', () => {
  it('should', () => {
    expect.assertions(7);

    expect(calc('')).toBe(0);
    expect(calc('3')).toBe(3);
    expect(calc('3.5')).toBe(3.5);
    expect(calc('1 3 +')).toBe(4);
    expect(calc('1 3 *')).toBe(3);
    expect(calc('1 3 -')).toBe(-2);
    expect(calc('4 2 /')).toBe(2);
  });
});
