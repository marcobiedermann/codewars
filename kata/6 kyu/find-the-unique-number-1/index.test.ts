import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import findUniq from './index.ts';

describe('findUniq', () => {
  it('should find the unique number', () => {
    assert.strictEqual(findUniq([1, 0, 0]), 1);
    assert.strictEqual(findUniq([0, 1, 0]), 1);
    assert.strictEqual(findUniq([0, 0, 1]), 1);
    assert.strictEqual(findUniq([1, 1, 1, 2, 1, 1]), 2);
    assert.strictEqual(findUniq([1, 1, 2, 1, 1]), 2);
    assert.strictEqual(findUniq([3, 10, 3, 3, 3]), 10);
    assert.strictEqual(findUniq([]), undefined);
  });
});
