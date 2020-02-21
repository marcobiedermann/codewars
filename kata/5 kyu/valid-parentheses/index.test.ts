import validParentheses from '.';

describe('validParentheses', () => {
  it('should if order of the parentheses is valid', () => {
    expect.assertions(2);

    expect(validParentheses('()')).toStrictEqual(true);
    expect(validParentheses('())')).toStrictEqual(false);
  });
});
