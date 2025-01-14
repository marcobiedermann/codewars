import { describe, expect, it } from 'vitest';
import isPalindrome from './index.ts';

describe('isPalindrome', () => {
  it('should identifies that a string is palindrome', () => {
    expect.assertions(1);

    expect(isPalindrome('anna')).toBe(true);
  });

  it('should identifies that a string is not palindrome', () => {
    expect.assertions(1);

    expect(isPalindrome('walter')).toBe(false);
  });

  it('should identifies that a number is palindrome', () => {
    expect.assertions(1);

    expect(isPalindrome(12321)).toBe(true);
  });

  it('should identifies that a number is not palindrome', () => {
    expect.assertions(1);

    expect(isPalindrome(123456)).toBe(false);
  });

  it('should identifies that a string is palindrome on punctuation', () => {
    expect.assertions(2);

    expect(isPalindrome('.')).toBe(true);
    expect(isPalindrome('.!!.')).toBe(true);
  });
});
