import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import mostFrequentItemCount from './index.ts';

describe('mostFrequentItemCount', () => {
  it('should find the count of the most frequent item of an array', () => {
    assert.strictEqual(mostFrequentItemCount([3, -1, -1]), 2);
    assert.strictEqual(mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]), 5);
  });
});
