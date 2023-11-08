import { describe, expect, it } from 'vitest';
import vowel from '.';

describe('vowel', () => {
  it('should check if the string is a vowel', () => {
    expect.assertions(6);

    expect(vowel('')).toBe(false);
    expect(vowel('a')).toBe(true);
    expect(vowel('E')).toBe(true);
    expect(vowel('ou')).toBe(false);
    expect(vowel('z')).toBe(false);
    expect(vowel('lol')).toBe(false);
  });
});
