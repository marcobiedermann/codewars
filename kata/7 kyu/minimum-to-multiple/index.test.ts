import minimum from '.';

describe('minimum', () => {
  it('should return minimum number to add / subtract to make multiple', () => {
    expect.assertions(12);

    expect(minimum(1, 1)).toStrictEqual(0);
    expect(minimum(9, 4)).toStrictEqual(1);
    expect(minimum(10, 6)).toStrictEqual(2);
    expect(minimum(60, 45)).toStrictEqual(15);
    expect(minimum(57, 50)).toStrictEqual(7);
    expect(minimum(28, 16)).toStrictEqual(4);
    expect(minimum(84, 80)).toStrictEqual(4);
    expect(minimum(129, 49)).toStrictEqual(18);
    expect(minimum(150, 67)).toStrictEqual(16);
    expect(minimum(121, 46)).toStrictEqual(17);
    expect(minimum(83, 81)).toStrictEqual(2);
    expect(minimum(89, 74)).toStrictEqual(15);
  });
});
