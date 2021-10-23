import isLeapYear from '.';

describe('isLeapYear', () => {
  it('should check whether year is a leap year', () => {
    expect.assertions(6);

    expect(isLeapYear(1000)).toBe(false);
    expect(isLeapYear(1234)).toBe(false);
    expect(isLeapYear(1984)).toBe(true);
    expect(isLeapYear(2000)).toBe(true);
    expect(isLeapYear(2010)).toBe(false);
    expect(isLeapYear(2013)).toBe(false);
  });
});
