import factorial from '.';

describe('factorial', () => {
  it('should return factorial', () => {
    expect.assertions(6);

    expect(factorial(0)).toBe(1);
    expect(factorial(1)).toBe(1);
    expect(factorial(2)).toBe(2);
    expect(factorial(3)).toBe(6);
    expect(() => factorial(-1)).toThrow(RangeError);
    expect(() => factorial(13)).toThrow(RangeError);
  });
});
