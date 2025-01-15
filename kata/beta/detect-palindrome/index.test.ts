import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import isPalindrome from './index.ts';

describe('isPalindrome', () => {
  it('should return boolean if string is palindrome', () => {
    assert.strictEqual(isPalindrome('racecar'), true);
    assert.strictEqual(isPalindrome('Civic'), true);
    assert.strictEqual(isPalindrome('Toot!'), true);
    assert.strictEqual(isPalindrome('never odd or even'), true);
    assert.strictEqual(isPalindrome('Not a tub, but a ton'), true);
    assert.strictEqual(isPalindrome('Nope'), false);
    assert.strictEqual(isPalindrome('Not this one'), false);
  });
});
