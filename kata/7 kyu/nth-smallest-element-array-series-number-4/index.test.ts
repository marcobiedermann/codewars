import { describe, expect, it } from 'vitest';
import nthSmallest from '.';

describe('nthSmallest', () => {
  it('should find the nth smallest number in the array', () => {
    expect.assertions(6);

    expect(nthSmallest([3, 1, 2], 2)).toBe(2);
    expect(nthSmallest([15, 20, 7, 10, 4, 3], 3)).toBe(7);
    expect(nthSmallest([-5, -1, -6, -18], 4)).toBe(-1);
    expect(nthSmallest([-102, -16, -1, -2, -367, -9], 5)).toBe(-2);
    expect(nthSmallest([2, 169, 13, -5, 0, -1], 4)).toBe(2);
    expect(nthSmallest([2, 1, 3, 3, 1, 2], 3)).toBe(2);
  });
});
