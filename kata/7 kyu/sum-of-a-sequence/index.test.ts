import { describe, expect, it } from 'vitest';
import sequenceSum from '.';

describe('sequenceSum', () => {
  it('should return sum of sequence', () => {
    expect.assertions(3);

    expect(sequenceSum(2, 6, 2)).toBe(12);
    expect(sequenceSum(1, 5, 1)).toBe(15);
    expect(sequenceSum(1, 5, 3)).toBe(5);
  });
});
