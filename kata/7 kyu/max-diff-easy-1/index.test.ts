import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import maxDiff from './index.ts';

describe('maxDiff', () => {
  it('should return difference between the biggest and the smallest value', () => {
    assert.strictEqual(maxDiff([0, 1, 2, 3, 4, 5, 6]), 6);
    assert.strictEqual(maxDiff([-0, 1, 2, -3, 4, 5, -6]), 11);
    assert.strictEqual(maxDiff([0, 1, 2, 3, 4, 5, 16]), 16);
    assert.strictEqual(maxDiff([16]), 0);
    assert.strictEqual(maxDiff([]), 0);
  });
});
