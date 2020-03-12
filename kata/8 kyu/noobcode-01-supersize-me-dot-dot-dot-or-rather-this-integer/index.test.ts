import superSize from '.';

describe('superSize', () => {
  it('should rearrange integer into largest possible value', () => {
    expect.assertions(9);

    expect(superSize(69)).toStrictEqual(96);
    expect(superSize(513)).toStrictEqual(531);
    expect(superSize(2017)).toStrictEqual(7210);
    expect(superSize(414)).toStrictEqual(441);
    expect(superSize(608719)).toStrictEqual(987610);
    expect(superSize(123456789)).toStrictEqual(987654321);
    expect(superSize(700000000001)).toStrictEqual(710000000000);
    expect(superSize(666666)).toStrictEqual(666666);
    expect(superSize(2)).toStrictEqual(2);
  });
});
