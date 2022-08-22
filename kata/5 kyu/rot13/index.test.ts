import rot13 from '.';

describe('rot13', () => {
  it('should rotate a string by 13 characters', () => {
    expect.assertions(2);

    expect(rot13('EBG13 rknzcyr.')).toBe('ROT13 example.');
    expect(rot13('This is my first ROT13 excercise!')).toBe('Guvf vf zl svefg EBG13 rkprepvfr!');
  });
});
