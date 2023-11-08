import { describe, expect, it } from 'vitest';
import isIntArray from '.';

describe('isIntArray', () => {
  it('should check if every element in an array in an integer', () => {
    expect.assertions(3);

    expect(isIntArray([])).toBe(true);
    expect(isIntArray([1, 2, 3, 4])).toBe(true);
    expect(isIntArray([1, 2, 3, NaN])).toBe(false);
  });
});
