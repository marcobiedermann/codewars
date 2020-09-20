import findUnique from '.';

describe('findUnique', () => {
  it('should find the only unique number in an array', () => {
    expect.assertions(5);

    expect(findUnique([1, 8, 4, 4, 6, 1, 8])).toStrictEqual(6);
    expect(findUnique([1234567])).toStrictEqual(1234567);
    expect(findUnique([1, 4, 4, 5, 5, 3, 3, 2, 2])).toStrictEqual(1);
    expect(findUnique([2, 2, 5, 5, 4, 3, 3, 1, 1])).toStrictEqual(4);
    expect(findUnique([3, 5, 5, 4, 4, 3, 2, 2, 9])).toStrictEqual(9);
  });
});
