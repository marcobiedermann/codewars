import validate from '.';

describe('validate', () => {
  it('should validate credit card numbers', () => {
    expect.assertions(5);

    expect(validate(123)).toStrictEqual(false);
    expect(validate(1)).toStrictEqual(false);
    expect(validate(2121)).toStrictEqual(true);
    expect(validate(1230)).toStrictEqual(true);
    expect(validate(8675309)).toStrictEqual(false);
  });
});
