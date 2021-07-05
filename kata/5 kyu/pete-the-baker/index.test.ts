import cakes from '.';

describe('cakes', () => {
  it('should return number of cakes', () => {
    expect.assertions(2);

    expect(
      cakes(
        {
          flour: 500,
          sugar: 200,
          eggs: 1,
        },
        {
          flour: 1200,
          sugar: 1200,
          eggs: 5,
          milk: 200,
        },
      ),
    ).toStrictEqual(2);
    expect(
      cakes(
        {
          apples: 3,
          flour: 300,
          sugar: 150,
          milk: 100,
          oil: 100,
        },
        {
          sugar: 500,
          flour: 2000,
          milk: 2000,
        },
      ),
    ).toStrictEqual(0);
  });
});
