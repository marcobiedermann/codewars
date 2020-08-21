import evenChars from '.';

describe('evenChars', () => {
  it('should return even characters', () => {
    expect.assertions(2);

    expect(evenChars('a')).toStrictEqual('invalid string');
    expect(evenChars('abcdefghijklm')).toStrictEqual(['b', 'd', 'f', 'h', 'j', 'l']);
  });
});
