import compare from '.';

describe('compare', () => {
  it('should compare two strings by their values', () => {
    expect.assertions(4);

    expect(compare('AD', 'BC')).toStrictEqual(true);
    expect(compare('AD', 'DD')).toStrictEqual(false);
    expect(compare('!!', '??')).toStrictEqual(true);
    expect(compare(null, null)).toStrictEqual(true);
  });
});
