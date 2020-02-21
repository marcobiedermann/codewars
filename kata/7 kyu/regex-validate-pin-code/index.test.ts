import validatePIN from '.';

describe('validatePIN', () => {
  it('should return False for pins with length other than 4 or 6', () => {
    expect.assertions(9);

    expect(validatePIN('1')).toStrictEqual(false);
    expect(validatePIN('12')).toStrictEqual(false);
    expect(validatePIN('123')).toStrictEqual(false);
    expect(validatePIN('12345')).toStrictEqual(false);
    expect(validatePIN('1234567')).toStrictEqual(false);
    expect(validatePIN('-1234')).toStrictEqual(false);
    expect(validatePIN('1.234')).toStrictEqual(false);
    expect(validatePIN('-1.234')).toStrictEqual(false);
    expect(validatePIN('00000000')).toStrictEqual(false);
  });

  it('should return False for pins which contain characters other than digits', () => {
    expect.assertions(2);

    expect(validatePIN('a234')).toStrictEqual(false);
    expect(validatePIN('.234')).toStrictEqual(false);
  });

  it('should return True for valid pins', () => {
    expect.assertions(8);

    expect(validatePIN('1234')).toStrictEqual(true);
    expect(validatePIN('0000')).toStrictEqual(true);
    expect(validatePIN('1111')).toStrictEqual(true);
    expect(validatePIN('123456')).toStrictEqual(true);
    expect(validatePIN('098765')).toStrictEqual(true);
    expect(validatePIN('000000')).toStrictEqual(true);
    expect(validatePIN('123456')).toStrictEqual(true);
    expect(validatePIN('090909')).toStrictEqual(true);
  });
});
