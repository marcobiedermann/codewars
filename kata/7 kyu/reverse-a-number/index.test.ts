import reverseNumber from '.';

describe('reverseNumber', () => {
  it('should reverse its digits', () => {
    expect.assertions(7);

    expect(reverseNumber(123)).toStrictEqual(321);
    expect(reverseNumber(-123)).toStrictEqual(-321);
    expect(reverseNumber(1000)).toStrictEqual(1);
    expect(reverseNumber(4321234)).toStrictEqual(4321234);
    expect(reverseNumber(5)).toStrictEqual(5);
    expect(reverseNumber(0)).toStrictEqual(0);
    expect(reverseNumber(98989898)).toStrictEqual(89898989);
  });
});
