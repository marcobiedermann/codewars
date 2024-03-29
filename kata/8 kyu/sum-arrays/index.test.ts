import { describe, expect, it } from 'vitest';
import sum from '.';

describe('sum', () => {
  it('should sum all numbers in array', () => {
    expect.assertions(2);

    expect(sum([])).toBe(0);
    expect(sum([1, 5.2, 4, 0, -1])).toBe(9.2);
  });
});
