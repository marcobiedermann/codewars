import { describe, expect, it } from 'vitest';
import hasUniqueChars from '.';

describe('hasUniqueChars', () => {
  it('should check if a string contains only unique characters', () => {
    expect.assertions(4);

    expect(hasUniqueChars('  nAa')).toBe(false);
    expect(hasUniqueChars('abcdef')).toBe(true);
    expect(hasUniqueChars('aA')).toBe(true);
    expect(hasUniqueChars('++-')).toBe(false);
  });
});
