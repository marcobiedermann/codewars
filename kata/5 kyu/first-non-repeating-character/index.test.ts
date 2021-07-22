import firstNonRepeatingLetter from '.';

describe('firstNonRepeatingLetter', () => {
  it('should return first non repeating letter in string', () => {
    expect.assertions(3);

    expect(firstNonRepeatingLetter('a')).toStrictEqual('a');
    expect(firstNonRepeatingLetter('stress')).toStrictEqual('t');
    expect(firstNonRepeatingLetter('moonmen')).toStrictEqual('e');
  });
});
