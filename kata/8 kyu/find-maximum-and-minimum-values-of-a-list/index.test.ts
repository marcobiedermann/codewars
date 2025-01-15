import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { max, min } from './index.ts';

describe('min', () => {
  it('should return min number in list', () => {
    assert.strictEqual(min([-52, 56, 30, 29, -54, 0, -110]), -110);
    assert.strictEqual(min([42, 54, 65, 87, 0]), 0);
  });
});

describe('max', () => {
  it('should return max number in list', () => {
    assert.strictEqual(max([4, 6, 2, 1, 9, 63, -134, 566]), 566);
    assert.strictEqual(max([5]), 5);
  });
});
