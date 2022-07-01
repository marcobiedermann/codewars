import { expect } from 'vitest';
import isDivisible from '.';

describe('isDivisible', () => {
  it('should check if `x` is divisible by `y`', () => {
    expect(isDivisible(3, 3, 4)).toBe(false);
    expect(isDivisible(12, 3, 4)).toBe(true);
    expect(isDivisible(8, 3, 4)).toBe(false);
    expect(isDivisible(48, 3, 4)).toBe(true);
  });
});
