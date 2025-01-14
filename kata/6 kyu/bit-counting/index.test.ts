import { describe, expect, it } from 'vitest';
import countBits from './index.ts';

describe('countBits', () => {
  it('should return the number of bits what are one', () => {
    expect.assertions(5);

    expect(countBits(0)).toBe(0);
    expect(countBits(4)).toBe(1);
    expect(countBits(7)).toBe(3);
    expect(countBits(9)).toBe(2);
    expect(countBits(10)).toBe(2);
  });
});
