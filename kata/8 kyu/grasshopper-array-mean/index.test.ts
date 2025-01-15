import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import findAverage from './index.ts';

describe('findAverage', () => {
  it('should find the average of numners', () => {
    assert.strictEqual(findAverage([1]), 1);
    assert.strictEqual(findAverage([1, 3, 5, 7]), 4);
  });
});
