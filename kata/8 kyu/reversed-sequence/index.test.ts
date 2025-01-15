import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import reverseSeq from './index.ts';

describe('reverseSeq', () => {
  it('should return sequence in reversed order', () => {
    assert.deepEqual(reverseSeq(5), [5, 4, 3, 2, 1]);
  });
});
