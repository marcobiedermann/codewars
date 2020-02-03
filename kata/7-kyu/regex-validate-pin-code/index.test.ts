import validatePIN from '.';

describe('validatePIN', () => {
  it('should return False for pins with length other than 4 or 6', () => {
    expect(validatePIN('1')).toEqual(false);
    expect(validatePIN('12')).toEqual(false);
    expect(validatePIN('123')).toEqual(false);
    expect(validatePIN('12345')).toEqual(false);
    expect(validatePIN('1234567')).toEqual(false);
    expect(validatePIN('-1234')).toEqual(false);
    expect(validatePIN('1.234')).toEqual(false);
    expect(validatePIN('-1.234')).toEqual(false);
    expect(validatePIN('00000000')).toEqual(false);
  });

  it('should return False for pins which contain characters other than digits', () => {
    expect(validatePIN('a234')).toEqual(false);
    expect(validatePIN('.234')).toEqual(false);
  });

  it('should return True for valid pins', () => {
    expect(validatePIN('1234')).toEqual(true);
    expect(validatePIN('0000')).toEqual(true);
    expect(validatePIN('1111')).toEqual(true);
    expect(validatePIN('123456')).toEqual(true);
    expect(validatePIN('098765')).toEqual(true);
    expect(validatePIN('000000')).toEqual(true);
    expect(validatePIN('123456')).toEqual(true);
    expect(validatePIN('090909')).toEqual(true);
  });
});
