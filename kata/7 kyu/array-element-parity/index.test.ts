import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import solve from './index.ts';

describe('solve', () => {
  it('should find integer in array', () => {
    assert.strictEqual(solve([1, -1, 2, -2, 3]), 3);
    assert.strictEqual(solve([-3, 1, 2, 3, -1, -4, -2]), -4);
    assert.strictEqual(solve([1, -1, 2, -2, 3, 3]), 3);
    assert.strictEqual(solve([-110, 110, -38, -38, -62, 62, -38, -38, -38]), -38);
    assert.strictEqual(solve([-9, -105, -9, -9, -9, -9, 105]), -9);
  });
});
