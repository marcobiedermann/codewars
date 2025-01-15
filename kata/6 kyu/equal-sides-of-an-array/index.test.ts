import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import findEvenIndex from './index.ts';

describe('findEvenIndex', () => {
  it('should find the index where the sum of the integers to the left is equal to the right one', () => {
    assert.strictEqual(findEvenIndex([1, 2, 3, 4, 3, 2, 1]), 3);
    assert.strictEqual(findEvenIndex([1, 100, 50, -51, 1, 1]), 1);
    assert.strictEqual(findEvenIndex([1, 2, 3, 4, 5, 6]), -1);
    assert.strictEqual(findEvenIndex([20, 10, 30, 10, 10, 15, 35]), 3);
  });
});
