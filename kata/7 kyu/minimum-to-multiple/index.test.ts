import minimum from '.';

describe('minimum', () => {
  it('should return minimum number to add / subtract to make multiple', () => {
    expect.assertions(12);

    const A = [
      [1, 1, 0],
      [9, 4, 1],
      [10, 6, 2],
      [60, 45, 15],
      [57, 50, 7],
      [28, 16, 4],
      [84, 80, 4],
      [129, 49, 18],
      [150, 67, 16],
      [121, 46, 17],
      [83, 81, 2],
      [89, 74, 15],
    ];

    A.forEach(([a, x, exp]) => {
      expect(minimum(a, x)).toStrictEqual(exp);
    });
  });
});
