import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import minMax from './index.ts';

describe('minMax', () => {
  it('should return the minimum and maximum number of array', () => {
    assert.deepEqual(minMax([1, 2, 3, 4, 5]), [1, 5]);
    assert.deepEqual(minMax([2334454, 5]), [5, 2334454]);
  });
});
