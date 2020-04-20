import isDigit from '.';

describe('isDigit', () => {
  it('should check if input is number', () => {
    expect.assertions(2);

    expect(isDigit('s2324')).toStrictEqual(false);
    expect(isDigit('-234.4')).toStrictEqual(true);
  });
});
