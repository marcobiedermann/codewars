import stringToNumber from '.';

describe('stringToNumber', () => {
  it('should convert string to number', () => {
    expect(stringToNumber('1234')).toEqual(1234);
    expect(stringToNumber('605')).toEqual(605);
    expect(stringToNumber('1405')).toEqual(1405);
    expect(stringToNumber('-7')).toEqual(-7);
  });
});
