import multiply from '.';

describe('multiply', () => {
  it('should multiply two numbers', () => {
    expect.assertions(4);

    expect(multiply(1, 1)).toBe(1);
    expect(multiply(2, 1)).toBe(2);
    expect(multiply(2, 2)).toBe(4);
    expect(multiply(3, 5)).toBe(15);
  });
});
