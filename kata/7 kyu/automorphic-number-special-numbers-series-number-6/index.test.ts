import automorphic from '.';

describe('automorphic', () => {
  it('should check if number is automorphic', () => {
    expect(automorphic(1)).toBe('Automorphic');
    expect(automorphic(3)).toBe('Not!!');
    expect(automorphic(6)).toBe('Automorphic');
    expect(automorphic(9)).toBe('Not!!');
    expect(automorphic(25)).toBe('Automorphic');
    expect(automorphic(53)).toBe('Not!!');
    expect(automorphic(76)).toBe('Automorphic');
    expect(automorphic(95)).toBe('Not!!');
    expect(automorphic(625)).toBe('Automorphic');
    expect(automorphic(225)).toBe('Not!!');
  });
});
