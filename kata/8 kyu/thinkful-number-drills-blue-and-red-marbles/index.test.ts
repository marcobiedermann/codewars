import guessBlue from '.';

describe('guessBlue', () => {
  it('should return the probability of drawing a blue marble', () => {
    expect.assertions(3);

    expect(guessBlue(5, 5, 2, 3)).toStrictEqual(0.6);
    expect(guessBlue(5, 7, 4, 3)).toStrictEqual(0.2);
    expect(guessBlue(12, 18, 4, 6)).toStrictEqual(0.4);
  });
});
