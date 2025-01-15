import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import findDifference from './index.ts';

describe('findDifference', () => {
  it('should calculate difference of cuboids volumes', () => {
    assert.strictEqual(findDifference([3, 2, 5], [1, 4, 4]), 14);
    assert.strictEqual(findDifference([9, 7, 2], [5, 2, 2]), 106);
    assert.strictEqual(findDifference([11, 2, 5], [1, 10, 8]), 30);
    assert.strictEqual(findDifference([4, 4, 7], [3, 9, 3]), 31);
    assert.strictEqual(findDifference([15, 20, 25], [10, 30, 25]), 0);
  });
});
