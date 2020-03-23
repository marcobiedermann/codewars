import isPalindrome from '.';

describe('isPalindrome', () => {
  it('should check if string is palindrome', () => {
    expect.assertions(8);

    expect(isPalindrome('a')).toStrictEqual(true);
    expect(isPalindrome('aba')).toStrictEqual(true);
    expect(isPalindrome('Abba')).toStrictEqual(true);
    expect(isPalindrome('hello')).toStrictEqual(false);
    expect(isPalindrome('Bob')).toStrictEqual(true);
    expect(isPalindrome('Madam')).toStrictEqual(true);
    expect(isPalindrome('AbBa')).toStrictEqual(true);
    expect(isPalindrome('')).toStrictEqual(true);
  });
});
