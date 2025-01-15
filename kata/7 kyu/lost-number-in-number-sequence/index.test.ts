import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import findDeletedNumber from './index.ts';

describe('findDeletedNumber', () => {
  it('should find the deleted number', () => {
    assert.strictEqual(findDeletedNumber([1, 2, 3, 4, 5], [3, 4, 1, 5]), 2);
    assert.strictEqual(findDeletedNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 9, 7, 4, 6, 2, 3, 8]), 5);
    assert.strictEqual(
      findDeletedNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], [5, 7, 6, 9, 4, 8, 1, 2, 3]),
      0,
    );
  });
});
