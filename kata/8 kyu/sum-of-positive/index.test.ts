import { expect } from 'vitest';
import positiveSum from '.';

describe('positiveSum', () => {
  it('should sum all positive numbers', () => {
    expect(positiveSum([1, 2, 3, 4, 5])).toBe(15);
    expect(positiveSum([1, -2, 3, 4, 5])).toBe(13);
    expect(positiveSum([])).toBe(0);
    expect(positiveSum([-1, -2, -3, -4, -5])).toBe(0);
    expect(positiveSum([-1, 2, 3, 4, -5])).toBe(9);
  });
});
