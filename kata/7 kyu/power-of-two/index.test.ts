import { describe, expect, it } from 'vitest';
import isPowerOfTwo from './index.ts';

describe('isPowerOfTwo', () => {
  it('should check if number is a power of two', () => {
    expect.assertions(3);

    expect(isPowerOfTwo(2)).toBe(true);
    expect(isPowerOfTwo(4096)).toBe(true);
    expect(isPowerOfTwo(5)).toBe(false);
  });
});
