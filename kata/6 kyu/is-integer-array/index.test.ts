import { expect } from 'vitest';
import isIntArray from '.';

describe('isIntArray', () => {
  it('should check if every element in an array in an integer', () => {
    expect(isIntArray([])).toBe(true);
    expect(isIntArray([1, 2, 3, 4])).toBe(true);
    expect(isIntArray([1, 2, 3, NaN])).toBe(false);
  });
});
