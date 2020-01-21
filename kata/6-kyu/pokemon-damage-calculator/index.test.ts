import calculateDamage from '.';

describe('calculateDamage', () => {
  it('should calculate move damage', () => {
    expect(calculateDamage('fire', 'water', 100, 100)).toEqual(25);
    expect(calculateDamage('grass', 'water', 100, 100)).toEqual(100);
    expect(calculateDamage('electric', 'fire', 100, 100)).toEqual(50);
    expect(calculateDamage('grass', 'electric', 57, 19)).toEqual(150);
    expect(calculateDamage('grass', 'water', 40, 40)).toEqual(100);
    expect(calculateDamage('grass', 'fire', 35, 5)).toEqual(175);
    expect(calculateDamage('fire', 'electric', 10, 2)).toEqual(250);
  });
});
