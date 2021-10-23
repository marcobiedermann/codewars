import opposite from '.';

describe('opposite', () => {
  it('should return its opposite', () => {
    expect.assertions(1);

    expect(opposite(1)).toStrictEqual(-1);
  });
});
