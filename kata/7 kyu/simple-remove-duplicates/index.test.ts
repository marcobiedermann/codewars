import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import solve from './index.ts';

describe('solve', () => {
  it('should remove left-most duplicates from list', () => {
    assert.deepEqual(solve([3, 4, 4, 3, 6, 3]), [4, 6, 3]);
    assert.deepEqual(solve([1, 2, 1, 2, 1, 2, 3]), [1, 2, 3]);
    assert.deepEqual(solve([1, 2, 3, 4]), [1, 2, 3, 4]);
    assert.deepEqual(solve([1, 1, 4, 5, 1, 2, 1]), [4, 5, 2, 1]);
    assert.deepEqual(solve([1, 2, 1, 2, 1, 1, 3]), [2, 1, 3]);
  });
});
