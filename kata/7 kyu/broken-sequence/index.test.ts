import { describe, expect, it } from 'vitest';
import findMissingNumber from './index.ts';

describe('findMissingNumber', () => {
  it('should find missing number in sequence', () => {
    expect.assertions(8);

    expect(findMissingNumber('1 2 3 5')).toBe(4);
    expect(findMissingNumber('1 3')).toBe(2);
    expect(findMissingNumber('1 5')).toBe(2);
    expect(findMissingNumber('')).toBe(0);
    expect(findMissingNumber('1 2 3 4 5')).toBe(0);
    expect(findMissingNumber('2 3 4 5')).toBe(1);
    expect(findMissingNumber('2 6 4 5 3')).toBe(1);
    expect(findMissingNumber('2 1 4 3 a')).toBe(1);
  });
});
