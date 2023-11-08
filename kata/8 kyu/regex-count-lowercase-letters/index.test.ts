import { describe, expect, it } from 'vitest';
import lowercaseCount from '.';

describe('lowercaseCount', () => {
  it('should cound lowercase letters in string', () => {
    expect.assertions(6);

    expect(lowercaseCount('abc')).toBe(3);
    expect(lowercaseCount('abcABC123')).toBe(3);
    expect(lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|':;?/>.<,~")).toBe(3);
    expect(lowercaseCount('')).toBe(0);
    expect(lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|':;?/>.<,~")).toBe(0);
    expect(lowercaseCount('abcdefghijklmnopqrstuvwxyz')).toBe(26);
  });
});
