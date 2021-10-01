import validPhoneNumber from '.';

describe('validPhoneNumber', () => {
  it('should check if phone number is valid', () => {
    expect.assertions(1);

    expect(validPhoneNumber('(123) 456-7890')).toBe(true);
  });
});
