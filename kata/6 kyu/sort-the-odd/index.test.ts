import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import sortArray from './index.ts';

describe('sortArray', () => {
  it('should sort the odd numbers in ascending order while leaving the even numbers', () => {
    assert.deepEqual(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
    assert.deepEqual(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);
    assert.deepEqual(sortArray([]), []);
  });
});
