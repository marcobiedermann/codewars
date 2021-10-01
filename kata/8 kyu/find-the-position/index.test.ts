import position from '.';

describe('position', () => {
  it('should position of letter in alphabet', () => {
    expect.assertions(3);

    expect(position('a')).toBe('Position of alphabet: 1');
    expect(position('z')).toBe('Position of alphabet: 26');
    expect(position('e')).toBe('Position of alphabet: 5');
  });
});
