import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import sequenceSum from './index.ts';

describe('sequenceSum', () => {
  it('should return sum of sequence', () => {
    assert.strictEqual(sequenceSum(2, 6, 2), 12);
    assert.strictEqual(sequenceSum(1, 5, 1), 15);
    assert.strictEqual(sequenceSum(1, 5, 3), 5);
  });
});
