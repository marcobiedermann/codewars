import isDivideBy from '.';

describe('isDivideBy', () => {
  it('should check if number is divisible by arguments', () => {
    expect.assertions(6);

    expect(isDivideBy(-12, 2, -6)).toStrictEqual(true);
    expect(isDivideBy(-12, 2, -5)).toStrictEqual(false);
    expect(isDivideBy(45, 1, 6)).toStrictEqual(false);
    expect(isDivideBy(45, 5, 15)).toStrictEqual(true);
    expect(isDivideBy(4, 1, 4)).toStrictEqual(true);
    expect(isDivideBy(15, -5, 3)).toStrictEqual(true);
  });
});
