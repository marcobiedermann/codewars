import compare from '.';

describe('compare', () => {
  it('should compare two strings by their values', () => {
    expect(compare('AD', 'BC')).toBe(true);
    expect(compare('AD', 'DD')).toBe(false);
    expect(compare('!!', '??')).toBe(true);
    expect(compare(null, null)).toBe(true);
  });
});
