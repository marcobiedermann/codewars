import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import isPalindrome from './index.ts';

describe('isPalindrome', () => {
  it('should identifies that a string is palindrome', () => {
    assert.strictEqual(isPalindrome('anna'), true);
  });

  it('should identifies that a string is not palindrome', () => {
    assert.strictEqual(isPalindrome('walter'), false);
  });

  it('should identifies that a number is palindrome', () => {
    assert.strictEqual(isPalindrome(12321), true);
  });

  it('should identifies that a number is not palindrome', () => {
    assert.strictEqual(isPalindrome(123456), false);
  });

  it('should identifies that a string is palindrome on punctuation', () => {
    assert.strictEqual(isPalindrome('.'), true);
    assert.strictEqual(isPalindrome('.!!.'), true);
  });
});
