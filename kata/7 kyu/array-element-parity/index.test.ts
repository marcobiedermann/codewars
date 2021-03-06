import solve from '.';

describe('solve', () => {
  it('should find integer in array', () => {
    expect.assertions(5);

    expect(solve([1, -1, 2, -2, 3])).toStrictEqual(3);
    expect(solve([-3, 1, 2, 3, -1, -4, -2])).toStrictEqual(-4);
    expect(solve([1, -1, 2, -2, 3, 3])).toStrictEqual(3);
    expect(solve([-110, 110, -38, -38, -62, 62, -38, -38, -38])).toStrictEqual(-38);
    expect(solve([-9, -105, -9, -9, -9, -9, 105])).toStrictEqual(-9);
  });
});
