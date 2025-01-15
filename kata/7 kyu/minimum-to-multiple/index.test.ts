import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import minimum from './index.ts';

describe('minimum', () => {
  it('should return minimum number to add / subtract to make multiple', () => {
    assert.strictEqual(minimum(1, 1), 0);
    assert.strictEqual(minimum(9, 4), 1);
    assert.strictEqual(minimum(10, 6), 2);
    assert.strictEqual(minimum(60, 45), 15);
    assert.strictEqual(minimum(57, 50), 7);
    assert.strictEqual(minimum(28, 16), 4);
    assert.strictEqual(minimum(84, 80), 4);
    assert.strictEqual(minimum(129, 49), 18);
    assert.strictEqual(minimum(150, 67), 16);
    assert.strictEqual(minimum(121, 46), 17);
    assert.strictEqual(minimum(83, 81), 2);
    assert.strictEqual(minimum(89, 74), 15);
  });
});
