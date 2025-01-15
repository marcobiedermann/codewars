import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import findOdd from './index.ts';

describe('findOdd', () => {
  it('should find the one which appears an odd number of times', () => {
    assert.strictEqual(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]), 5);
    assert.strictEqual(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]), -1);
    assert.strictEqual(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]), 5);
    assert.strictEqual(findOdd([10]), 10);
    assert.strictEqual(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]), 10);
    assert.strictEqual(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]), 1);
  });
});
