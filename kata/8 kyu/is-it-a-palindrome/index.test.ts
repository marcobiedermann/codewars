import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import isPalindrome from './index.ts';

describe('isPalindrome', () => {
  it('should check if string is palindrome', () => {
    assert.strictEqual(isPalindrome('a'), true);
    assert.strictEqual(isPalindrome('aba'), true);
    assert.strictEqual(isPalindrome('Abba'), true);
    assert.strictEqual(isPalindrome('hello'), false);
    assert.strictEqual(isPalindrome('Bob'), true);
    assert.strictEqual(isPalindrome('Madam'), true);
    assert.strictEqual(isPalindrome('AbBa'), true);
    assert.strictEqual(isPalindrome(''), true);
  });
});
