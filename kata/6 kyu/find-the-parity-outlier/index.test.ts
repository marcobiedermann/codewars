import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import findOutlier from './index.ts';

describe('findOutlier', () => {
  it('should return the single even or single odd number', () => {
    assert.strictEqual(findOutlier([0, 1, 2]), 1);
    assert.strictEqual(findOutlier([1, 2, 3]), 2);
    assert.strictEqual(findOutlier([2, 6, 8, 10, 3]), 3);
    assert.strictEqual(findOutlier([0, 0, 3, 0, 0]), 3);
    assert.strictEqual(findOutlier([1, 1, 0, 1, 1]), 0);
  });
});
