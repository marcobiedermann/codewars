import stringToNumber from '.';

describe('stringToNumber', () => {
  it('should convert string to number', () => {
    expect.assertions(4);

    expect(stringToNumber('1234')).toStrictEqual(1234);
    expect(stringToNumber('605')).toStrictEqual(605);
    expect(stringToNumber('1405')).toStrictEqual(1405);
    expect(stringToNumber('-7')).toStrictEqual(-7);
  });
});
