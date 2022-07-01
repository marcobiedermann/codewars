import firstNonRepeatingLetter from '.';

describe('firstNonRepeatingLetter', () => {
  it('should return first non repeating letter in string', () => {
    expect(firstNonRepeatingLetter('a')).toBe('a');
    expect(firstNonRepeatingLetter('stress')).toBe('t');
    expect(firstNonRepeatingLetter('moonmen')).toBe('e');
  });
});
