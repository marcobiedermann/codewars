import isDigit from '.';

describe('isDigit', () => {
  it('should check if input is number', () => {
    expect(isDigit('s2324')).toBe(false);
    expect(isDigit('-234.4')).toBe(true);
  });
});
