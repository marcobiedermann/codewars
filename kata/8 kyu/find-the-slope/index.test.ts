import { describe, expect, it } from 'vitest';
import slope from './index.ts';

describe('slope', () => {
  it('should return string represenation of slope', () => {
    expect.assertions(6);

    expect(slope([19, 3, 20, 3])).toBe('0');
    expect(slope([2, 7, 4, -7])).toBe('-7');
    expect(slope([10, 50, 30, 150])).toBe('5');
    expect(slope([15, 45, 12, 60])).toBe('-5');
    expect(slope([10, 20, 20, 80])).toBe('6');
    expect(slope([-10, 6, -10, 3])).toBe('undefined');
  });
});
