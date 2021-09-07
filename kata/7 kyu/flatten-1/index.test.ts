import flatten from '.';

describe('flatten', () => {
  it('should flatten `Array` of `Array`', () => {
    expect.assertions(5);

    expect(flatten([])).toStrictEqual([]);
    expect(flatten([1, 2, 3])).toStrictEqual([1, 2, 3]);
    expect(
      flatten([
        [1, 2, 3],
        ['a', 'b', 'c'],
        [1, 2, 3],
      ]),
    ).toStrictEqual([1, 2, 3, 'a', 'b', 'c', 1, 2, 3]);
    expect(flatten([[3, 4, 5], [[9, 9, 9]], ['a,b,c']])).toStrictEqual([
      3,
      4,
      5,
      [9, 9, 9],
      'a,b,c',
    ]);
    expect(flatten([[[3], [4], [5]], [9], [9], [8], [[1, 2, 3]]])).toStrictEqual([
      [3],
      [4],
      [5],
      9,
      9,
      8,
      [1, 2, 3],
    ]);
  });
});
