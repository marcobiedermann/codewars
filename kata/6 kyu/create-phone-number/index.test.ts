import createPhoneNumber from '.';

describe('createPhoneNumber', () => {
  it('should format array of numbers to phone number', () => {
    expect.assertions(3);

    expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toStrictEqual('(123) 456-7890');
    expect(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toStrictEqual('(111) 111-1111');
    expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toStrictEqual('(123) 456-7890');
  });
});
