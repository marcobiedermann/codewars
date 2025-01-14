import { describe, expect, it } from 'vitest';
import repeats from './index.ts';

describe('repeats', () => {
  it('should sum the numbers that occur only once', () => {
    expect.assertions(5);

    expect(repeats([4, 5, 7, 5, 4, 8])).toBe(15);
    expect(repeats([9, 10, 19, 13, 19, 13])).toBe(19);
    expect(repeats([16, 0, 11, 4, 8, 16, 0, 11])).toBe(12);
    expect(repeats([5, 17, 18, 11, 13, 18, 11, 13])).toBe(22);
    expect(repeats([5, 10, 19, 13, 10, 13])).toBe(24);
  });
});
