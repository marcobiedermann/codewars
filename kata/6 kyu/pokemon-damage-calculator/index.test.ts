import calculateDamage from '.';

describe('calculateDamage', () => {
  it('should calculate move damage', () => {
    expect(calculateDamage('fire', 'water', 100, 100)).toBe(25);
    expect(calculateDamage('grass', 'water', 100, 100)).toBe(100);
    expect(calculateDamage('electric', 'fire', 100, 100)).toBe(50);
    expect(calculateDamage('grass', 'electric', 57, 19)).toBe(150);
    expect(calculateDamage('grass', 'water', 40, 40)).toBe(100);
    expect(calculateDamage('grass', 'fire', 35, 5)).toBe(175);
    expect(calculateDamage('fire', 'electric', 10, 2)).toBe(250);
  });
});
