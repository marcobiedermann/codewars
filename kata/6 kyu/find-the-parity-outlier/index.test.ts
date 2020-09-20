import findOutlier from '.';

describe('findOutlier', () => {
  it('should return the single even or single odd number', () => {
    expect.assertions(5);

    expect(findOutlier([0, 1, 2])).toStrictEqual(1);
    expect(findOutlier([1, 2, 3])).toStrictEqual(2);
    expect(findOutlier([2, 6, 8, 10, 3])).toStrictEqual(3);
    expect(findOutlier([0, 0, 3, 0, 0])).toStrictEqual(3);
    expect(findOutlier([1, 1, 0, 1, 1])).toStrictEqual(0);
  });
});
