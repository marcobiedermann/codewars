import numberToString from '.';

describe('numberToString', () => {
  it('should convert number to string', () => {
    expect.assertions(1);

    expect(numberToString(67)).toStrictEqual('67');
  });
});
