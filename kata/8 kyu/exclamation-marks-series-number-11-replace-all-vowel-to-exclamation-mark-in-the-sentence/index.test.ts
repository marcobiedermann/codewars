import replace from '.';

describe('replace', () => {
  it('should replace all vowel by exclamation mark', () => {
    expect.assertions(4);

    expect(replace('Hi!')).toBe('H!!');
    expect(replace('!Hi! Hi!')).toBe('!H!! H!!');
    expect(replace('aeiou')).toBe('!!!!!');
    expect(replace('ABCDE')).toBe('!BCD!');
  });
});
