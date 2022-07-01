import evenChars from '.';

describe('evenChars', () => {
  it('should return even characters', () => {
    expect(evenChars('a')).toBe('invalid string');
    expect(evenChars('abcdefghijklm')).toStrictEqual(['b', 'd', 'f', 'h', 'j', 'l']);
  });
});
