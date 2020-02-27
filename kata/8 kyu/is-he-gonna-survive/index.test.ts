import hero from '.';

describe('hero', () => {
  it('should check if hero has enough bullets to survive', () => {
    expect.assertions(6);

    expect(hero(10, 5)).toStrictEqual(true);
    expect(hero(7, 4)).toStrictEqual(false);
    expect(hero(4, 5)).toStrictEqual(false);
    expect(hero(100, 40)).toStrictEqual(true);
    expect(hero(1500, 751)).toStrictEqual(false);
    expect(hero(0, 1)).toStrictEqual(false);
  });
});
