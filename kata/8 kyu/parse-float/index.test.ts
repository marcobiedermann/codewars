import parseF from '.';

describe('parseF', () => {
  it('should parse string to float', () => {
    expect(parseF('1')).toBe(1.0);
    expect(parseF('A')).toBeNull();
  });
});
