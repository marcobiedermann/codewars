import { describe, expect, it } from 'vitest';
import sumOfDifferences from './index.ts';

describe('sumOfDifferences', () => {
  it('should sum the differences between consecutive pairs in the array in descending order', () => {
    expect.assertions(4);

    expect(sumOfDifferences([1, 2, 10])).toBe(9);
    expect(sumOfDifferences([-3, -2, -1])).toBe(2);
    expect(sumOfDifferences([1])).toBe(0);
    expect(sumOfDifferences([])).toBe(0);
  });
});
