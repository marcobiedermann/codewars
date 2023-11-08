import { describe, expect, it } from 'vitest';
import mostFrequentItemCount from '.';

describe('mostFrequentItemCount', () => {
  it('should find the count of the most frequent item of an array', () => {
    expect.assertions(2);

    expect(mostFrequentItemCount([3, -1, -1])).toBe(2);
    expect(mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3])).toBe(5);
  });
});
