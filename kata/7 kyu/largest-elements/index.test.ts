import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import largest from './index.ts';

describe('largest', () => {
  it('should find the `n` largest elements in the list', () => {
    assert.deepEqual(largest(2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [9, 10]);
    assert.deepEqual(largest(0, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), []);
    assert.deepEqual(largest(2, [-3, -2, -1, 0, -9, -8, -7, -6, -4, -5]), [-1, 0]);
    assert.deepEqual(largest(3, [5, 1, 5, 2, 3, 1, 2, 3, 5]), [5, 5, 5]);
    assert.deepEqual(largest(7, [9, 1, 50, 22, 3, 13, 2, 63, 5]), [3, 5, 9, 13, 22, 50, 63]);
    assert.deepEqual(largest(0, [1, 2, 3, 4, 8, 7, 6, 5]), []);
  });
});
