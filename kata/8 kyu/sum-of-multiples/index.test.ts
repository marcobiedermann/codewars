import { describe, expect, it } from 'vitest';
import sumMul from './index.ts';

describe('sumMul', () => {
  it('should return the sum of all multiples of `n` below `m`', () => {
    expect.assertions(3);

    expect(sumMul(0, 0)).toBe('INVALID');
    expect(sumMul(2, 9)).toBe(20);
    expect(sumMul(4, -7)).toBe('INVALID');
  });
});
