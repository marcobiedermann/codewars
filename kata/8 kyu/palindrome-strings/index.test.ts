import isPalindrome from '.';

describe('isPalindrome', () => {
  it('should identifies that a string is palindrome', () => {
    expect.assertions(1);

    expect(isPalindrome('anna')).toStrictEqual(true);
  });

  it('should identifies that a string is not palindrome', () => {
    expect.assertions(1);

    expect(isPalindrome('walter')).toStrictEqual(false);
  });

  it('should identifies that a number is palindrome', () => {
    expect.assertions(1);

    expect(isPalindrome(12321)).toStrictEqual(true);
  });

  it('should identifies that a number is not palindrome', () => {
    expect.assertions(1);

    expect(isPalindrome(123456)).toStrictEqual(false);
  });

  it('should identifies that a string is palindrome on punctuation', () => {
    expect.assertions(2);

    expect(isPalindrome('.')).toStrictEqual(true);
    expect(isPalindrome('.!!.')).toStrictEqual(true);
  });
});
