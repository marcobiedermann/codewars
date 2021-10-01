import wordPattern from '.';

describe('wordPattern', () => {
  it('should return the word pattern for a given word', () => {
    expect.assertions(4);

    expect(wordPattern('hello')).toBe('0.1.2.2.3');
    expect(wordPattern('heLlo')).toBe('0.1.2.2.3');
    expect(wordPattern('helLo')).toBe('0.1.2.2.3');
    expect(wordPattern('Hippopotomonstrosesquippedaliophobia')).toBe(
      '0.1.2.2.3.2.3.4.3.5.3.6.7.4.8.3.7.9.7.10.11.1.2.2.9.12.13.14.1.3.2.0.3.15.1.13',
    );
  });
});
