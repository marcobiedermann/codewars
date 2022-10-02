import getNumberFromString from '.';

describe('getNumberFromString', () => {
  it('should get all numbers from string', () => {
    expect.assertions(3);

    expect(getNumberFromString('1')).toBe(1);
    expect(getNumberFromString('123')).toBe(123);
    expect(getNumberFromString('this is number: 7')).toBe(7);
  });
});
