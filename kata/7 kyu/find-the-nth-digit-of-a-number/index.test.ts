import findDigit from '.';

describe('findDigit', () => {
  it('should find the nth digit of a number', () => {
    expect.assertions(7);

    expect(findDigit(5673, 4)).toStrictEqual(5);
    expect(findDigit(129, 2)).toStrictEqual(2);
    expect(findDigit(-2825, 3)).toStrictEqual(8);
    expect(findDigit(-456, 4)).toStrictEqual(0);
    expect(findDigit(0, 20)).toStrictEqual(0);
    expect(findDigit(65, 0)).toStrictEqual(-1);
    expect(findDigit(24, -8)).toStrictEqual(-1);
  });
});
