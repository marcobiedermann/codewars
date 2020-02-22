import pendulum from '.';

describe('pendulum', () => {
  it('should check short length positives', () => {
    expect.assertions(7);

    expect(pendulum([4, 10, 9])).toStrictEqual([10, 4, 9]);
    expect(pendulum([8, 7, 10, 3])).toStrictEqual([8, 3, 7, 10]);
    expect(pendulum([6, 6, 8, 5, 10])).toStrictEqual([10, 6, 5, 6, 8]);
    expect(pendulum([9, 4, 6, 4, 10, 5])).toStrictEqual([9, 5, 4, 4, 6, 10]);
    expect(pendulum([4, 6, 8, 7, 5])).toStrictEqual([8, 6, 4, 5, 7]);
    expect(pendulum([10, 5, 6, 10])).toStrictEqual([10, 5, 6, 10]);
    expect(pendulum([11, 12, 12])).toStrictEqual([12, 11, 12]);
  });

  it('should check medium length positives', () => {
    expect.assertions(7);

    expect(pendulum([27, 27, 19, 21, 22, 28, 24])).toStrictEqual([28, 27, 22, 19, 21, 24, 27]);
    expect(pendulum([20, 19, 25, 16, 19, 30, 18, 24])).toStrictEqual([
      25,
      20,
      19,
      16,
      18,
      19,
      24,
      30,
    ]);
    expect(pendulum([22, 26, 21, 27, 24, 21, 15, 26, 25])).toStrictEqual([
      27,
      26,
      24,
      21,
      15,
      21,
      22,
      25,
      26,
    ]);
    expect(pendulum([19, 30, 16, 19, 28, 26, 28, 17, 21, 17])).toStrictEqual([
      28,
      26,
      19,
      17,
      16,
      17,
      19,
      21,
      28,
      30,
    ]);
    expect(pendulum([27, 28, 26, 28, 24, 22, 18, 16, 15, 24])).toStrictEqual([
      28,
      26,
      24,
      18,
      15,
      16,
      22,
      24,
      27,
      28,
    ]);
    expect(pendulum([17, 26, 15, 26, 26, 20, 16, 18, 15])).toStrictEqual([
      26,
      26,
      18,
      16,
      15,
      15,
      17,
      20,
      26,
    ]);
    expect(pendulum([22, 21, 19, 27, 18, 15, 24, 24])).toStrictEqual([
      24,
      22,
      19,
      15,
      18,
      21,
      24,
      27,
    ]);
  });

  it('should check lengthy positives', () => {
    expect.assertions(5);

    expect(pendulum([33, 38, 38, 36, 43, 48, 32, 40, 47, 50, 33])).toStrictEqual([
      50,
      47,
      40,
      38,
      33,
      32,
      33,
      36,
      38,
      43,
      48,
    ]);
    expect(pendulum([49, 40, 41, 41, 39, 43, 40, 46, 30, 47, 46, 40])).toStrictEqual([
      47,
      46,
      41,
      40,
      40,
      30,
      39,
      40,
      41,
      43,
      46,
      49,
    ]);
    expect(pendulum([48, 41, 38, 35, 50, 46, 38, 42, 37, 49, 44, 32, 37])).toStrictEqual([
      50,
      48,
      44,
      41,
      38,
      37,
      32,
      35,
      37,
      38,
      42,
      46,
      49,
    ]);
    expect(pendulum([49, 30, 39, 30, 40, 44, 43, 48, 47, 50, 42, 48, 33])).toStrictEqual([
      50,
      48,
      47,
      43,
      40,
      33,
      30,
      30,
      39,
      42,
      44,
      48,
      49,
    ]);
    expect(pendulum([48, 43, 35, 47, 39, 38, 38, 46, 49, 32, 42])).toStrictEqual([
      49,
      47,
      43,
      39,
      38,
      32,
      35,
      38,
      42,
      46,
      48,
    ]);
  });

  it('should check short length negatives', () => {
    expect.assertions(6);

    expect(pendulum([-9, -2, -10, -6])).toStrictEqual([-6, -10, -9, -2]);
    expect(pendulum([-3, -6, -7])).toStrictEqual([-3, -7, -6]);
    expect(pendulum([-7, -8, -2, -3, -4])).toStrictEqual([-2, -4, -8, -7, -3]);
    expect(pendulum([-8, -8, -9, -10, -10, -3])).toStrictEqual([-8, -9, -10, -10, -8, -3]);
    expect(pendulum([-7, -10, -1, -10, -8])).toStrictEqual([-1, -8, -10, -10, -7]);
    expect(pendulum([-6, -2, -5])).toStrictEqual([-2, -6, -5]);
  });

  it('should check medium length negatives', () => {
    expect.assertions(4);

    expect(pendulum([-2, -11, -6, -11, -4, -3, -5])).toStrictEqual([-2, -4, -6, -11, -11, -5, -3]);
    expect(pendulum([-19, -9, -5, -6, -15, -16, -5, -12])).toStrictEqual([
      -5,
      -9,
      -15,
      -19,
      -16,
      -12,
      -6,
      -5,
    ]);
    expect(pendulum([-18, -2, -11, -10, -6, -7, -7, -12, -16])).toStrictEqual([
      -2,
      -7,
      -10,
      -12,
      -18,
      -16,
      -11,
      -7,
      -6,
    ]);
    expect(pendulum([-10, -10, -12, -13, -5, -10, -4, -17, -5, -12])).toStrictEqual([
      -5,
      -10,
      -10,
      -12,
      -17,
      -13,
      -12,
      -10,
      -5,
      -4,
    ]);
  });

  it('should check lengthy negatives', () => {
    expect.assertions(3);

    expect(pendulum([-33, -21, -6, -29, -24, -5, -50, -42, -43, -17, -17])).toStrictEqual([
      -5,
      -17,
      -21,
      -29,
      -42,
      -50,
      -43,
      -33,
      -24,
      -17,
      -6,
    ]);
    expect(pendulum([-4, -50, -32, -23, -47, -44, -43, -24, -29, -44, -20, -35])).toStrictEqual([
      -20,
      -24,
      -32,
      -43,
      -44,
      -50,
      -47,
      -44,
      -35,
      -29,
      -23,
      -4,
    ]);
    expect(
      pendulum([-36, -38, -44, -47, -41, -27, -10, -30, -22, -11, -23, -50, -23]),
    ).toStrictEqual([-10, -22, -23, -30, -38, -44, -50, -47, -41, -36, -27, -23, -11]);
  });

  it('should check mixture of positives and negatives', () => {
    expect.assertions(8);

    expect(pendulum([-15, 8, 11])).toStrictEqual([11, -15, 8]);
    expect(pendulum([8, -1, -1, -10])).toStrictEqual([-1, -10, -1, 8]);
    expect(pendulum([-8, 15, 8, -3, -11])).toStrictEqual([15, -3, -11, -8, 8]);
    expect(pendulum([15, 17, 3, -20, -1, 3])).toStrictEqual([15, 3, -20, -1, 3, 17]);
    expect(pendulum([-8, -13, -19, -8, 7, 15, -10])).toStrictEqual([15, -8, -10, -19, -13, -8, 7]);
    expect(pendulum([11, -16, -18, 13, -11, -12, 3, 18])).toStrictEqual([
      13,
      3,
      -12,
      -18,
      -16,
      -11,
      11,
      18,
    ]);
    expect(pendulum([7, -5, -20, 15, 2, 10, 18, 4, -10])).toStrictEqual([
      18,
      10,
      4,
      -5,
      -20,
      -10,
      2,
      7,
      15,
    ]);
    expect(pendulum([-6, 1, 2, 12, 19, 12, 19, -10, 13, 1])).toStrictEqual([
      19,
      12,
      2,
      1,
      -10,
      -6,
      1,
      12,
      13,
      19,
    ]);
  });
});
