import arrayMadness from '.';

describe('arrayMadness', () => {
  it('should check is `a` is greater than `b`', () => {
    expect.assertions(11);

    expect(arrayMadness([4, 5, 6], [1, 2, 3])).toStrictEqual(true);
    expect(arrayMadness([5, 6, 7], [4, 5, 6])).toStrictEqual(false);
    expect(arrayMadness([4, 5, 6], [3, 4, 5])).toStrictEqual(false);
    expect(arrayMadness([3, 4, 5], [2, 3, 4])).toStrictEqual(false);
    expect(arrayMadness([2, 3, 4], [1, 2, 3])).toStrictEqual(false);
    expect(arrayMadness([1, 2, 3], [0, 1, 2])).toStrictEqual(true);
    expect(arrayMadness([5, 3, 2, 4, 1], [15])).toStrictEqual(false);
    expect(arrayMadness([2, 5, 3, 4, 1], [3, 3, 3, 3, 3])).toStrictEqual(false);
    expect(arrayMadness([1, 3, 5, 2, 4], [2, 2, 2, 2, 2, 2, 2, 1])).toStrictEqual(false);
    expect(arrayMadness([1, 2, 3, 4, 5], [2, 2, 2, 2, 2, 2, 1, 1, 1])).toStrictEqual(true);
    expect(arrayMadness([2, 4, 6, 8, 10, 12, 14], [1, 3, 5, 7, 9, 11, 13])).toStrictEqual(false);
  });
});
