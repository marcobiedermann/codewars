import isPalindrome from '.';

describe('isPalindrome', () => {
  it('should identifies that a string is palindrome', () => {
    expect(isPalindrome('anna')).toBe(true);
  });

  it('should identifies that a string is not palindrome', () => {
    expect(isPalindrome('walter')).toBe(false);
  });

  it('should identifies that a number is palindrome', () => {
    expect(isPalindrome(12321)).toBe(true);
  });

  it('should identifies that a number is not palindrome', () => {
    expect(isPalindrome(123456)).toBe(false);
  });

  it('should identifies that a string is palindrome on punctuation', () => {
    expect(isPalindrome('.')).toBe(true);
    expect(isPalindrome('.!!.')).toBe(true);
  });
});
