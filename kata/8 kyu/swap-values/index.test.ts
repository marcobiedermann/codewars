import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import swapValues from './index.ts';

describe('swapValues', () => {
  it('should swap values in array', () => {
    const arr = [1, 2];

    swapValues(arr);

    assert.deepEqual(arr, [2, 1]);
  });
});
