import largest from '.';

describe('largest', () => {
  it('should find the `n` largest elements in the list', () => {
    expect.assertions(6);

    expect(largest(2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1])).toStrictEqual([9, 10]);
    expect(largest(0, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1])).toStrictEqual([]);
    expect(largest(2, [-3, -2, -1, 0, -9, -8, -7, -6, -4, -5])).toStrictEqual([-1, 0]);
    expect(largest(3, [5, 1, 5, 2, 3, 1, 2, 3, 5])).toStrictEqual([5, 5, 5]);
    expect(largest(7, [9, 1, 50, 22, 3, 13, 2, 63, 5])).toStrictEqual([3, 5, 9, 13, 22, 50, 63]);
    expect(largest(0, [1, 2, 3, 4, 8, 7, 6, 5])).toStrictEqual([]);
  });
});
