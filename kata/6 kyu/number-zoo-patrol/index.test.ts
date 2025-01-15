import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import findNumber from './index.ts';

describe('findNumber', () => {
  it('should find the missing number', () => {
    assert.strictEqual(findNumber([1, 3, 4, 5, 6, 7, 8]), 2);
    assert.strictEqual(findNumber([7, 8, 1, 2, 4, 5, 6]), 3);
    assert.strictEqual(findNumber([1, 2, 3, 5]), 4);
    assert.strictEqual(findNumber([1, 3]), 2);
    assert.strictEqual(findNumber([2, 3, 4]), 1);
    assert.strictEqual(findNumber([13, 11, 10, 3, 2, 1, 4, 5, 6, 9, 7, 8]), 12);
    assert.strictEqual(findNumber([1, 2, 3]), 4);
  });
});
