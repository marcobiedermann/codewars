import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import squareOrSquareRoot from './index.ts';

describe('squareOrSquareRoot', () => {
  it('should return array of numbers, if the number has an integer square root, take this, otherwise square the number', () => {
    assert.deepEqual(squareOrSquareRoot([4, 3, 9, 7, 2, 1]), [2, 9, 3, 49, 4, 1]);
    assert.deepEqual(squareOrSquareRoot([100, 101, 5, 5, 1, 1]), [10, 10201, 25, 25, 1, 1]);
    assert.deepEqual(squareOrSquareRoot([1, 2, 3, 4, 5, 6]), [1, 4, 9, 2, 25, 36]);
  });
});
