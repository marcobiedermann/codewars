import getChar from '.';

describe('getChar', () => {
  it('should return ASCII char of value', () => {
    expect.assertions(11);

    expect(getChar(55)).toStrictEqual('7');
    expect(getChar(56)).toStrictEqual('8');
    expect(getChar(57)).toStrictEqual('9');
    expect(getChar(58)).toStrictEqual(':');
    expect(getChar(59)).toStrictEqual(';');
    expect(getChar(60)).toStrictEqual('<');
    expect(getChar(61)).toStrictEqual('=');
    expect(getChar(62)).toStrictEqual('>');
    expect(getChar(63)).toStrictEqual('?');
    expect(getChar(64)).toStrictEqual('@');
    expect(getChar(65)).toStrictEqual('A');
  });
});
