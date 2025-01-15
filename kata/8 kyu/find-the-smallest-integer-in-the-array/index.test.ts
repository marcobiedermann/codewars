import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import SmallestIntegerFinder from './index.ts';

describe('smallestIntegerFinder', () => {
  it('should find the smallest integer', () => {
    const smallestIntegerFinder = new SmallestIntegerFinder();

    assert.strictEqual(smallestIntegerFinder.findSmallestInt([78, 56, 232, 12, 8]), 8);
    assert.strictEqual(smallestIntegerFinder.findSmallestInt([78, 56, 232, 12, 18]), 12);
    assert.strictEqual(smallestIntegerFinder.findSmallestInt([78, 56, 232, 412, 228]), 56);
    assert.strictEqual(smallestIntegerFinder.findSmallestInt([78, 56, 232, 12, 0]), 0);
    assert.strictEqual(smallestIntegerFinder.findSmallestInt([1, 56, 232, 12, 8]), 1);
  });
});
