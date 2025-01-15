import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import positiveSum from './index.ts';

describe('positiveSum', () => {
  it('should sum all positive numbers', () => {
    assert.strictEqual(positiveSum([1, 2, 3, 4, 5]), 15);
    assert.strictEqual(positiveSum([1, -2, 3, 4, 5]), 13);
    assert.strictEqual(positiveSum([]), 0);
    assert.strictEqual(positiveSum([-1, -2, -3, -4, -5]), 0);
    assert.strictEqual(positiveSum([-1, 2, 3, 4, -5]), 9);
  });
});
