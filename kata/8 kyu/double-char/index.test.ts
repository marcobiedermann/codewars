import doubleChar from '.';

describe('doubleChar', () => {
  it('should repeat each character in string', () => {
    expect.assertions(6);

    expect(doubleChar('abcd')).toStrictEqual('aabbccdd');
    expect(doubleChar('Adidas')).toStrictEqual('AAddiiddaass');
    expect(doubleChar('1337')).toStrictEqual('11333377');
    expect(doubleChar('illuminati')).toStrictEqual('iilllluummiinnaattii');
    expect(doubleChar('123456')).toStrictEqual('112233445566');
    expect(doubleChar('%^&*(')).toStrictEqual('%%^^&&**((');
  });
});
