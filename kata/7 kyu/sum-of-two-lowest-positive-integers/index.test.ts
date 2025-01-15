import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import sumTwoSmallestNumbers from './index.ts';

describe('sumTwoSmallestNumbers', () => {
  it('should sum the two lowest positive integers', () => {
    assert.strictEqual(sumTwoSmallestNumbers([5, 8, 12, 19, 22]), 13);
    assert.strictEqual(sumTwoSmallestNumbers([15, 28, 4, 2, 43]), 6);
    assert.strictEqual(sumTwoSmallestNumbers([3, 87, 45, 12, 7]), 10);
    assert.strictEqual(sumTwoSmallestNumbers([23, 71, 33, 82, 1]), 24);
    assert.strictEqual(sumTwoSmallestNumbers([52, 76, 14, 12, 4]), 16);
  });
});
