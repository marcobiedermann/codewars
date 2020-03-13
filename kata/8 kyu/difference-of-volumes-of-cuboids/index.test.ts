import findDifference from '.';

describe('findDifference', () => {
  it('should calculate difference of cuboids volumes', () => {
    expect.assertions(5);

    expect(findDifference([3, 2, 5], [1, 4, 4])).toStrictEqual(14);
    expect(findDifference([9, 7, 2], [5, 2, 2])).toStrictEqual(106);
    expect(findDifference([11, 2, 5], [1, 10, 8])).toStrictEqual(30);
    expect(findDifference([4, 4, 7], [3, 9, 3])).toStrictEqual(31);
    expect(findDifference([15, 20, 25], [10, 30, 25])).toStrictEqual(0);
  });
});
