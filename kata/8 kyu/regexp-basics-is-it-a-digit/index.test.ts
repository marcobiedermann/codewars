import digit from '.';

describe('digit', () => {
  it('should check if value is digit', () => {
    expect(digit('')).toBe(false);
    expect(digit('7')).toBe(true);
    expect(digit(' ')).toBe(false);
    expect(digit('a')).toBe(false);
    expect(digit('a5')).toBe(false);
    expect(digit('14')).toBe(false);
  });
});
