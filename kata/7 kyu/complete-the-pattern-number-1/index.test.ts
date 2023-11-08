import { describe, expect, it } from 'vitest';
import pattern from '.';

describe('pattern', () => {
  it('should return pattern', () => {
    expect.assertions(3);

    expect(pattern(1)).toBe('1');
    expect(pattern(2)).toBe('1\n22');
    expect(pattern(5)).toBe('1\n22\n333\n4444\n55555');
  });
});
