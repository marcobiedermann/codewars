import compare from '.';

describe('compare', () => {
  it('should compare two strings by their values', () => {
    expect.assertions(2);

    expect(compare('AD', 'BC')).toStrictEqual(true);
    expect(compare('AD', 'DD')).toStrictEqual(false);
  });
});
