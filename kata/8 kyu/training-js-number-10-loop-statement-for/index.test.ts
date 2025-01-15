import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import pickIt from './index.ts';

describe('pickIt', () => {
  it('should return array or even and odd numbers', () => {
    assert.deepEqual(pickIt([1, 2]), [[1], [2]]);
    assert.deepEqual(pickIt([1, 2, 3]), [[1, 3], [2]]);
    assert.deepEqual(pickIt([3, 2, 1]), [[3, 1], [2]]);
    assert.deepEqual(pickIt([10, 20, 30]), [[], [10, 20, 30]]);
    assert.deepEqual(pickIt([11, 21, 31]), [[11, 21, 31], []]);
    assert.deepEqual(pickIt([8, 1, 5, 4, 6, 1, 1]), [
      [1, 5, 1, 1],
      [8, 4, 6],
    ]);
  });
});
