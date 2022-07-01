import pyramid from '.';

describe('pyramid', () => {
  it('should return an array of ascending length subarrays', () => {
    expect(pyramid(0)).toStrictEqual([]);
    expect(pyramid(1)).toStrictEqual([[1]]);
    expect(pyramid(2)).toStrictEqual([[1], [1, 1]]);
    expect(pyramid(3)).toStrictEqual([[1], [1, 1], [1, 1, 1]]);
  });
});
