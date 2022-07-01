import addLetters from '.';

describe('addLetters', () => {
  it('should add up letters to one letter', () => {
    expect(addLetters('a', 'b', 'c')).toBe('f');
    expect(addLetters('z')).toBe('z');
    expect(addLetters('a', 'b')).toBe('c');
    expect(addLetters('c')).toBe('c');
    expect(addLetters('z', 'a')).toBe('a');
    expect(addLetters('y', 'c', 'b')).toBe('d');
    expect(addLetters()).toBe('z');
  });
});
