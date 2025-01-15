import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import sumOfDifferences from './index.ts';

describe('sumOfDifferences', () => {
  it('should sum the differences between consecutive pairs in the array in descending order', () => {
    assert.strictEqual(sumOfDifferences([1, 2, 10]), 9);
    assert.strictEqual(sumOfDifferences([-3, -2, -1]), 2);
    assert.strictEqual(sumOfDifferences([1]), 0);
    assert.strictEqual(sumOfDifferences([]), 0);
  });
});
