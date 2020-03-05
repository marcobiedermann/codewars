import replace from '.';

describe('replace', () => {
  it('should replace all vowel by exclamation mark', () => {
    expect.assertions(4);

    expect(replace('Hi!')).toStrictEqual('H!!');
    expect(replace('!Hi! Hi!')).toStrictEqual('!H!! H!!');
    expect(replace('aeiou')).toStrictEqual('!!!!!');
    expect(replace('ABCDE')).toStrictEqual('!BCD!');
  });
});
