import keysAndValues from '.';

describe('keysAndValues', () => {
  it('should return the keys and values as separate arrays', () => {
    expect.assertions(1);

    expect(keysAndValues({ a: 1, b: 2, c: 3 })).toStrictEqual([
      ['a', 'b', 'c'],
      [1, 2, 3],
    ]);
  });
});
