import isPalindrome from '.';

describe('isPalindrome', () => {
  it('should return boolean if string is palindrome', () => {
    expect.assertions(7);

    expect(isPalindrome('racecar')).toStrictEqual(true);
    expect(isPalindrome('Civic')).toStrictEqual(true);
    expect(isPalindrome('Toot!')).toStrictEqual(true);
    expect(isPalindrome('never odd or even')).toStrictEqual(true);
    expect(isPalindrome('Not a tub, but a ton')).toStrictEqual(true);
    expect(isPalindrome('Nope')).toStrictEqual(false);
    expect(isPalindrome('Not this one')).toStrictEqual(false);
  });
});
