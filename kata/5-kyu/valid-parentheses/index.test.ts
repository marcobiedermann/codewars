import validParentheses from '.';

describe('validParentheses', () => {
  it('should if order of the parentheses is valid', () => {
    expect(validParentheses('()')).toEqual(true);
    expect(validParentheses('())')).toEqual(false);
  });
});
