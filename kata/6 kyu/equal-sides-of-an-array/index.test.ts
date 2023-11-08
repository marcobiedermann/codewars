import { describe, expect, it } from 'vitest';
import findEvenIndex from '.';

describe('findEvenIndex', () => {
  it('should find the index where the sum of the integers to the left is equal to the right one', () => {
    expect.assertions(4);

    expect(findEvenIndex([1, 2, 3, 4, 3, 2, 1])).toBe(3);
    expect(findEvenIndex([1, 100, 50, -51, 1, 1])).toBe(1);
    expect(findEvenIndex([1, 2, 3, 4, 5, 6])).toBe(-1);
    expect(findEvenIndex([20, 10, 30, 10, 10, 15, 35])).toBe(3);
  });
});
