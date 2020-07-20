import maxDiff from '.';

describe('maxDiff', () => {
  it('should return difference between the biggest and the smallest value', () => {
    expect.assertions(5);

    expect(maxDiff([0, 1, 2, 3, 4, 5, 6])).toStrictEqual(6);
    expect(maxDiff([-0, 1, 2, -3, 4, 5, -6])).toStrictEqual(11);
    expect(maxDiff([0, 1, 2, 3, 4, 5, 16])).toStrictEqual(16);
    expect(maxDiff([16])).toStrictEqual(0);
    expect(maxDiff([])).toStrictEqual(0);
  });
});
