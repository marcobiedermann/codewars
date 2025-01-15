import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import findUnique from './index.ts';

describe('findUnique', () => {
  it('should find the only unique number in an array', () => {
    assert.strictEqual(findUnique([1, 8, 4, 4, 6, 1, 8]), 6);
    assert.strictEqual(findUnique([1234567]), 1234567);
    assert.strictEqual(findUnique([1, 4, 4, 5, 5, 3, 3, 2, 2]), 1);
    assert.strictEqual(findUnique([2, 2, 5, 5, 4, 3, 3, 1, 1]), 4);
    assert.strictEqual(findUnique([3, 5, 5, 4, 4, 3, 2, 2, 9]), 9);
    assert.strictEqual(findUnique([]), undefined);
  });
});
