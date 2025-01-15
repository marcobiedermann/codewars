import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import arrayMadness from './index.ts';

describe('arrayMadness', () => {
  it('should check is `a` is greater than `b`', () => {
    assert.strictEqual(arrayMadness([4, 5, 6], [1, 2, 3]), true);
    assert.strictEqual(arrayMadness([5, 6, 7], [4, 5, 6]), false);
    assert.strictEqual(arrayMadness([4, 5, 6], [3, 4, 5]), false);
    assert.strictEqual(arrayMadness([3, 4, 5], [2, 3, 4]), false);
    assert.strictEqual(arrayMadness([2, 3, 4], [1, 2, 3]), false);
    assert.strictEqual(arrayMadness([1, 2, 3], [0, 1, 2]), true);
    assert.strictEqual(arrayMadness([5, 3, 2, 4, 1], [15]), false);
    assert.strictEqual(arrayMadness([2, 5, 3, 4, 1], [3, 3, 3, 3, 3]), false);
    assert.strictEqual(arrayMadness([1, 3, 5, 2, 4], [2, 2, 2, 2, 2, 2, 2, 1]), false);
    assert.strictEqual(arrayMadness([1, 2, 3, 4, 5], [2, 2, 2, 2, 2, 2, 1, 1, 1]), true);
    assert.strictEqual(arrayMadness([2, 4, 6, 8, 10, 12, 14], [1, 3, 5, 7, 9, 11, 13]), false);
  });
});
