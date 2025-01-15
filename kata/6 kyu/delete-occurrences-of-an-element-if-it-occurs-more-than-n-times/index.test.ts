import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import deleteNth from './index.ts';

describe('deleteNth', () => {
  it('should return list containing each number at most N times', () => {
    assert.deepEqual(deleteNth([20, 37, 20, 21], 1), [20, 37, 21]);
    assert.deepEqual(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3), [1, 1, 3, 3, 7, 2, 2, 2]);
  });
});
