import doubleChar from '.';

describe('doubleChar', () => {
  it('should repeat each character in string', () => {
    expect(doubleChar('abcd')).toEqual('aabbccdd');
    expect(doubleChar('Adidas')).toEqual('AAddiiddaass');
    expect(doubleChar('1337')).toEqual('11333377');
    expect(doubleChar('illuminati')).toEqual('iilllluummiinnaattii');
    expect(doubleChar('123456')).toEqual('112233445566');
    expect(doubleChar('%^&*(')).toEqual('%%^^&&**((');
  });
});
