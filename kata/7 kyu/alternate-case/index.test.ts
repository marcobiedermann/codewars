import { describe, expect, it } from 'vitest';
import alternateCase from './index.ts';

describe('alternateCase', () => {
  it('should switch every letter from upper to lower and from lower to upper', () => {
    expect.assertions(3);

    expect(alternateCase('abc')).toBe('ABC');
    expect(alternateCase('ABC')).toBe('abc');
    expect(alternateCase('Hello World')).toBe('hELLO wORLD');
  });
});
