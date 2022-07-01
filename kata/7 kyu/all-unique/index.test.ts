import hasUniqueChars from '.';

describe('hasUniqueChars', () => {
  it('should check if a string contains only unique characters', () => {
    expect(hasUniqueChars('  nAa')).toBe(false);
    expect(hasUniqueChars('abcdef')).toBe(true);
    expect(hasUniqueChars('aA')).toBe(true);
    expect(hasUniqueChars('++-')).toBe(false);
  });
});
