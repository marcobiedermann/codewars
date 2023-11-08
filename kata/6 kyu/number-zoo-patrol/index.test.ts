import { describe, expect, it } from 'vitest';
import findNumber from '.';

describe('findNumber', () => {
  it('should find the missing number', () => {
    expect.assertions(7);

    expect(findNumber([1, 3, 4, 5, 6, 7, 8])).toBe(2);
    expect(findNumber([7, 8, 1, 2, 4, 5, 6])).toBe(3);
    expect(findNumber([1, 2, 3, 5])).toBe(4);
    expect(findNumber([1, 3])).toBe(2);
    expect(findNumber([2, 3, 4])).toBe(1);
    expect(findNumber([13, 11, 10, 3, 2, 1, 4, 5, 6, 9, 7, 8])).toBe(12);
    expect(findNumber([1, 2, 3])).toBe(4);
  });
});
