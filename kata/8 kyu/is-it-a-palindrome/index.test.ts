import isPalindrome from '.';

describe('isPalindrome', () => {
  it('should check if string is palindrome', () => {
    expect.assertions(8);

    expect(isPalindrome('a')).toBe(true);
    expect(isPalindrome('aba')).toBe(true);
    expect(isPalindrome('Abba')).toBe(true);
    expect(isPalindrome('hello')).toBe(false);
    expect(isPalindrome('Bob')).toBe(true);
    expect(isPalindrome('Madam')).toBe(true);
    expect(isPalindrome('AbBa')).toBe(true);
    expect(isPalindrome('')).toBe(true);
  });
});
