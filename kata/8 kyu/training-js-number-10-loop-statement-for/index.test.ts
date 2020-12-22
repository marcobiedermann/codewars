import pickIt from '.';

describe('pickIt', () => {
  it('should return array or even and odd numbers', () => {
    expect.assertions(6);

    expect(pickIt([1, 2])).toStrictEqual([[1], [2]]);
    expect(pickIt([1, 2, 3])).toStrictEqual([[1, 3], [2]]);
    expect(pickIt([3, 2, 1])).toStrictEqual([[3, 1], [2]]);
    expect(pickIt([10, 20, 30])).toStrictEqual([[], [10, 20, 30]]);
    expect(pickIt([11, 21, 31])).toStrictEqual([[11, 21, 31], []]);
    expect(pickIt([8, 1, 5, 4, 6, 1, 1])).toStrictEqual([
      [1, 5, 1, 1],
      [8, 4, 6],
    ]);
  });
});
