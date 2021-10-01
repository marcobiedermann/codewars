import peopleWithAgeDrink from '.';

describe('peopleWithAgeDrink', () => {
  it('should return drink based on age', () => {
    expect.assertions(1);

    expect(peopleWithAgeDrink(22)).toBe('drink whisky');
  });
});
