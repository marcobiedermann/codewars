import multiply from '.';

describe('multiply', () => {
  it('should multiply two numbers', () => {
    expect.assertions(1);

    expect(multiply(1, 2)).toBe(2);
  });
});
