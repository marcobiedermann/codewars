import race from '.';

describe('race', () => {
  it('should return time it takes `B` to catch `A`', () => {
    expect.assertions(4);

    expect(race(720, 850, 70)).toStrictEqual([0, 32, 18]);
    expect(race(80, 91, 37)).toStrictEqual([3, 21, 49]);
    expect(race(80, 100, 40)).toStrictEqual([2, 0, 0]);
    expect(race(2, 1, 0)).toBeNull();
  });
});
