import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import monkeyCount from './index.ts';

describe('monkeyCount', () => {
  it('should return an array with all numbers up to that number', () => {
    assert.deepEqual(monkeyCount(5), [1, 2, 3, 4, 5]);
    assert.deepEqual(monkeyCount(3), [1, 2, 3]);
    assert.deepEqual(monkeyCount(9), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    assert.deepEqual(monkeyCount(10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    assert.deepEqual(
      monkeyCount(20),
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    );
  });
});
