import isLeapYear from '.';

describe('isLeapYear', () => {
  it('should check whether year is a leap year', () => {
    expect.assertions(5);

    expect(isLeapYear(1234)).toStrictEqual(false);
    expect(isLeapYear(1984)).toStrictEqual(true);
    expect(isLeapYear(2000)).toStrictEqual(true);
    expect(isLeapYear(2010)).toStrictEqual(false);
    expect(isLeapYear(2013)).toStrictEqual(false);
  });
});
