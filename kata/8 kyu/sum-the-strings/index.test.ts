import sumStr from '.';

describe('sumStr', () => {
  it('should add two numbers in form of a string', () => {
    expect.assertions(2);

    expect(sumStr('4', '5')).toStrictEqual('9');
    expect(sumStr('34', '5')).toStrictEqual('39');
  });
});
