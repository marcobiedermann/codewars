import triangle from '.';

describe('triangle', () => {
  it('should', () => {
    expect(triangle('GB')).toBe('R');
    expect(triangle('RRR')).toBe('R');
    expect(triangle('RGBG')).toBe('B');
    expect(triangle('RBRGBRB')).toBe('G');
    expect(triangle('RBRGBRBGGRRRBGBBBGG')).toBe('G');
    expect(triangle('B')).toBe('B');
  });
});
