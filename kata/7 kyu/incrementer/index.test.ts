import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import incrementer from './index.ts';

describe('incrementer', () => {
  it('should increment each digit by its position', () => {
    assert.deepEqual(incrementer([]), []);
    assert.deepEqual(incrementer([1, 2, 3]), [2, 4, 6]);
    assert.deepEqual(incrementer([4, 6, 7, 1, 3]), [5, 8, 0, 5, 8]);
    assert.deepEqual(incrementer([3, 6, 9, 8, 9]), [4, 8, 2, 2, 4]);
    assert.deepEqual(
      incrementer([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 8]),
      [2, 4, 6, 8, 0, 2, 4, 6, 8, 9, 0, 1, 2, 2],
    );
  });
});
