import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import averages from './index.ts';

describe('averages', () => {
  it('should return average for each number and his follower', () => {
    assert.deepEqual(averages([2, 2, 2, 2, 2]), [2, 2, 2, 2]);
    assert.deepEqual(averages([2, -2, 2, -2, 2]), [0, 0, 0, 0]);
    assert.deepEqual(averages([1, 3, 5, 1, -10]), [2, 4, 3, -4.5]);
  });
});
