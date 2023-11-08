import { describe, expect, it } from 'vitest';
import findLongest from '.';

describe('findLongest', () => {
  it('should find number with most digist', () => {
    expect.assertions(3);

    expect(findLongest([1, 10, 100])).toBe(100);
    expect(findLongest([9000, 8, 800])).toBe(9000);
    expect(findLongest([8, 900, 500])).toBe(900);
  });
});
