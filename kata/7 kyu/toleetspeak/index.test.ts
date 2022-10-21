import toLeetSpeak from '.';

describe('toLeetSpeak', () => {
  it('should convert to Leetspeak', () => {
    expect.assertions(5);

    expect(toLeetSpeak('LEET')).toBe('1337');
    expect(toLeetSpeak('CODEWARS')).toBe('(0D3W@R$');
    expect(toLeetSpeak('HELLO WORLD')).toBe('#3110 W0R1D');
    expect(toLeetSpeak('LOREM IPSUM DOLOR SIT AMET')).toBe('10R3M !P$UM D010R $!7 @M37');
    expect(toLeetSpeak('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG')).toBe(
      '7#3 QU!(K 8R0WN F0X JUMP$ 0V3R 7#3 1@2Y D06',
    );
  });
});
