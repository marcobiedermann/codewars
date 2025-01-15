import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import foldArray from './index.ts';

describe('foldArray', () => {
  it('should fold array', () => {
    assert.deepEqual(foldArray([1, 2, 3, 4, 5], 1), [6, 6, 3]);
    assert.deepEqual(foldArray([1, 2, 3, 4, 5], 2), [9, 6]);
    assert.deepEqual(foldArray([1, 2, 3, 4, 5], 3), [15]);
    assert.deepEqual(foldArray([-9, 9, -8, 8, 66, 23], 1), [14, 75, 0]);
  });
});
