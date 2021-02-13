import noOdds from '.';

describe('noOdds', () => {
  it('should return not odd numbers', () => {
    expect.assertions(2);

    expect(noOdds([0, 1])).toStrictEqual([0]);
    expect(noOdds([0, 1, 2, 3])).toStrictEqual([0, 2]);
  });
});
