import { describe, expect, it } from 'vitest';
import findOutlier from './index.ts';

describe('findOutlier', () => {
  it('should return the single even or single odd number', () => {
    expect.assertions(5);

    expect(findOutlier([0, 1, 2])).toBe(1);
    expect(findOutlier([1, 2, 3])).toBe(2);
    expect(findOutlier([2, 6, 8, 10, 3])).toBe(3);
    expect(findOutlier([0, 0, 3, 0, 0])).toBe(3);
    expect(findOutlier([1, 1, 0, 1, 1])).toBe(0);
  });
});
