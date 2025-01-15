import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import maps from './index.ts';

describe('maps', () => {
  it('should double each value in array', () => {
    assert.deepEqual(maps([1, 2, 3]), [2, 4, 6]);
    assert.deepEqual(maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8]);
    assert.deepEqual(maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4]);
  });
});
