import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import getEvenNumbers from './index.ts';

describe('getEvenNumbers', () => {
  it('should filter even numbers', () => {
    assert.deepEqual(getEvenNumbers([1, 2, 3, 6, 8, 10]), [2, 6, 8, 10]);
    assert.deepEqual(getEvenNumbers([1, 2]), [2]);
    assert.deepEqual(getEvenNumbers([12, 14, 15]), [12, 14]);
    assert.deepEqual(getEvenNumbers([13, 15]), []);
    assert.deepEqual(getEvenNumbers([1, 3, 9]), []);
  });
});
