import validPhoneNumber from '.';

describe('validPhoneNumber', () => {
  it('should check if phone number is valid', () => {
    expect(validPhoneNumber('(123) 456-7890')).toBe(true);
  });
});
