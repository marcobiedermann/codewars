import hero from '.';

describe('hero', () => {
  it('should check if hero has enough bullets to survive', () => {
    expect.assertions(6);

    expect(hero(10, 5)).toBe(true);
    expect(hero(7, 4)).toBe(false);
    expect(hero(4, 5)).toBe(false);
    expect(hero(100, 40)).toBe(true);
    expect(hero(1500, 751)).toBe(false);
    expect(hero(0, 1)).toBe(false);
  });
});
