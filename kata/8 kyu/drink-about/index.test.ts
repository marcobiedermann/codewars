import peopleWithAgeDrink from '.';

describe('peopleWithAgeDrink', () => {
  it('should return drink based on age', () => {
    expect.assertions(4);

    expect(peopleWithAgeDrink(22)).toBe('drink whisky');
    expect(peopleWithAgeDrink(18)).toBe('drink beer');
    expect(peopleWithAgeDrink(16)).toBe('drink coke');
    expect(peopleWithAgeDrink(3)).toBe('drink toddy');
  });
});
