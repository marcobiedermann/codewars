import { describe, expect, it } from 'vitest';
import numberOfOccurrences from './index.ts';

describe('numberOfOccurrences', () => {
  it('should return number of occurrences', () => {
    expect.assertions(1);

    expect(numberOfOccurrences([4, 0, 4], 4)).toBe(2);
  });
});
