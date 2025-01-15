import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import evenNumbers from './index.ts';

describe('evenNumbers', () => {
  it('should return last even numbers', () => {
    assert.deepEqual(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), [4, 6, 8]);
    assert.deepEqual(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2), [-8, 26]);
    assert.deepEqual(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1), [6]);
  });
});
