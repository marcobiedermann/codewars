import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import array_diff from './index.ts';

describe('array_diff', () => {
  it('should remove all values from list `a` which are present in list `b`', () => {
    assert.deepEqual(array_diff([], [4, 5]), []);
    assert.deepEqual(array_diff([3, 4], [3]), [4]);
    assert.deepEqual(array_diff([1, 8, 2], []), [1, 8, 2]);
  });
});
