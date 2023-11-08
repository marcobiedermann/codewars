import { describe, expect, it } from 'vitest';
import reverseSeq from '.';

describe('reverseSeq', () => {
  it('should return sequence in reversed order', () => {
    expect.assertions(1);

    expect(reverseSeq(5)).toStrictEqual([5, 4, 3, 2, 1]);
  });
});
