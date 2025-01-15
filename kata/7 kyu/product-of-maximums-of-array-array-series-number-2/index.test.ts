import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import maxProduct from './index.ts';

describe('maxProduct', () => {
  it('should return the product of the `k` maximal numbers', () => {
    assert.strictEqual(maxProduct([4, 3, 5], 2), 20);
    assert.strictEqual(maxProduct([10, 8, 7, 9], 3), 720);
    assert.strictEqual(maxProduct([8, 6, 4, 6], 3), 288);
    assert.strictEqual(maxProduct([10, 2, 3, 8, 1, 10, 4], 5), 9600);
    assert.strictEqual(maxProduct([13, 12, -27, -302, 25, 37, 133, 155, -14], 5), 247895375);
    assert.strictEqual(maxProduct([-4, -27, -15, -6, -1], 2), 4);
    assert.strictEqual(maxProduct([-17, -8, -102, -309], 2), 136);
    assert.strictEqual(maxProduct([10, 3, -27, -1], 3), -30);
    assert.strictEqual(maxProduct([14, 29, -28, 39, -16, -48], 4), -253344);
    assert.strictEqual(maxProduct([1], 1), 1);
  });
});
