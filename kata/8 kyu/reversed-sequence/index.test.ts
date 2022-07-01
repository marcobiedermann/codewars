import { expect } from 'vitest';
import reverseSeq from '.';

describe('reverseSeq', () => {
  it('should return sequence in reversed order', () => {
    expect(reverseSeq(5)).toStrictEqual([5, 4, 3, 2, 1]);
  });
});
