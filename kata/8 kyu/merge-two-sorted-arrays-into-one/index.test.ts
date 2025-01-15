import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import mergeArrays from './index.ts';

describe('mergeArrays', () => {
  it('should merge two arrays into one', () => {
    assert.deepEqual(mergeArrays([1, 2, 3, 4], [5, 6, 7, 8]), [1, 2, 3, 4, 5, 6, 7, 8]);
    assert.deepEqual(
      mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2]),
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    );
    assert.deepEqual(
      mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]),
      [1, 2, 3, 4, 5, 7, 9, 10, 11, 12],
    );
  });
});
