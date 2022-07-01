import validParentheses from '.';

describe('validParentheses', () => {
  it('should if order of the parentheses is valid', () => {
    expect(validParentheses('()')).toBe(true);
    expect(validParentheses('())')).toBe(false);
  });
});
