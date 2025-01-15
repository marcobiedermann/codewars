import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import index from './index.ts';

describe('index', () => {
  it('should return the N-th power of the element in the array with the index N', () => {
    assert.strictEqual(index([1, 2, 3, 4], 2), 9);
    assert.strictEqual(index([1, 3, 10, 100], 3), 1000000);
    assert.strictEqual(index([0, 1], 0), 1);
    assert.strictEqual(index([1, 2], 3), -1);
    assert.strictEqual(index([0], 0), 1);
    assert.strictEqual(index([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 9), 1);
    assert.strictEqual(index([1, 1, 1, 1, 1, 1, 1, 1, 1, 2], 9), 512);
    assert.strictEqual(index([29, 82, 45, 10], 3), 1000);
    assert.strictEqual(index([6, 31], 3), -1);
    assert.strictEqual(index([75, 68, 35, 61, 9, 36, 89, 0, 30], 10), -1);
  });
});
