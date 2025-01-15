import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import grow from './index.ts';

describe('grow', () => {
  it('should multiply all numbers in list', () => {
    assert.strictEqual(grow([1, 2, 3]), 6);
    assert.strictEqual(grow([4, 1, 1, 1, 4]), 16);
    assert.strictEqual(grow([2, 2, 2, 2, 2, 2]), 64);
  });
});
