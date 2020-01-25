import isPalindrome from '.';

describe('isPalindrome', () => {
  it('should return boolean if string is palindrome', () => {
    expect(isPalindrome('racecar')).toEqual(true);
    expect(isPalindrome('Civic')).toEqual(true);
    expect(isPalindrome('Toot!')).toEqual(true);
    expect(isPalindrome('never odd or even')).toEqual(true);
    expect(isPalindrome('Not a tub, but a ton')).toEqual(true);
    expect(isPalindrome('Nope')).toEqual(false);
    expect(isPalindrome('Not this one')).toEqual(false);
  });
});
