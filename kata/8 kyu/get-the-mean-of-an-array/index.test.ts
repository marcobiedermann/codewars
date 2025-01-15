import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import getAverage from './index.ts';

describe('getAverage', () => {
  it('should return rounded average of numbers', () => {
    assert.strictEqual(getAverage([2, 2, 2, 2]), 2);
    assert.strictEqual(getAverage([1, 2, 3, 4, 5]), 3);
    assert.strictEqual(getAverage([1, 1, 1, 1, 1, 1, 1, 2]), 1);
  });
});
