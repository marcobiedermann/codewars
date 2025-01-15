import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import largestPairSum from './index.ts';

describe('largestPairSum', () => {
  it('should find the largest pair sum in sequence', () => {
    assert.strictEqual(largestPairSum([10, 14, 2, 23, 19]), 42);
    assert.strictEqual(largestPairSum([-100, -29, -24, -19, 19]), 0);
    assert.strictEqual(largestPairSum([1, 2, 3, 4, 6, -1, 2]), 10);
    assert.strictEqual(largestPairSum([-10, -8, -16, -18, -19]), -18);
  });
});
