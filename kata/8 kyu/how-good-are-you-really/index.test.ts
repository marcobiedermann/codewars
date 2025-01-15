import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import betterThanAverage from './index.ts';

describe('example Tests', () => {
  it('betterThanAverage([2, 3], 5) should return True', () => {
    assert.strictEqual(betterThanAverage([2, 3], 5), true);
  });

  it('betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75) should return True', () => {
    assert.strictEqual(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75), true);
  });

  it('betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9) should return False', () => {
    assert.strictEqual(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9), false);
  });
});
