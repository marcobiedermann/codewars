import { describe, expect, it } from 'vitest';
import isPalindrome from './index.ts';

describe('isPalindrome', () => {
  it('should return boolean if string is palindrome', () => {
    expect.assertions(7);

    expect(isPalindrome('racecar')).toBe(true);
    expect(isPalindrome('Civic')).toBe(true);
    expect(isPalindrome('Toot!')).toBe(true);
    expect(isPalindrome('never odd or even')).toBe(true);
    expect(isPalindrome('Not a tub, but a ton')).toBe(true);
    expect(isPalindrome('Nope')).toBe(false);
    expect(isPalindrome('Not this one')).toBe(false);
  });
});
