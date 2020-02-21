import calculateDamage from '.';

describe('calculateDamage', () => {
  it('should calculate move damage', () => {
    expect.assertions(7);

    expect(calculateDamage('fire', 'water', 100, 100)).toStrictEqual(25);
    expect(calculateDamage('grass', 'water', 100, 100)).toStrictEqual(100);
    expect(calculateDamage('electric', 'fire', 100, 100)).toStrictEqual(50);
    expect(calculateDamage('grass', 'electric', 57, 19)).toStrictEqual(150);
    expect(calculateDamage('grass', 'water', 40, 40)).toStrictEqual(100);
    expect(calculateDamage('grass', 'fire', 35, 5)).toStrictEqual(175);
    expect(calculateDamage('fire', 'electric', 10, 2)).toStrictEqual(250);
  });
});
