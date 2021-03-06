import combat from '.';

describe('combat', () => {
  it('should calculate health after damage', () => {
    expect.assertions(3);

    expect(combat(100, 5)).toStrictEqual(95);
    expect(combat(92, 8)).toStrictEqual(84);
    expect(combat(20, 30)).toStrictEqual(0);
  });
});
