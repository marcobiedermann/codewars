import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import sumOrProduct from './index.ts';

describe('sumOrProduct', () => {
  it('should return the sum or product', () => {
    assert.strictEqual(sumOrProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4), 'sum');
    assert.strictEqual(sumOrProduct([10, 41, 8, 16, 20, 36, 9, 13, 20], 3), 'product');
    assert.strictEqual(sumOrProduct([10, 20, 3, 30, 5, 4], 3), 'same');
  });

  it('should not modify the input', () => {
    const input = [10, 41, 8, 16, 20, 36, 9, 13, 20];

    sumOrProduct(input, 4);

    assert.deepEqual(input, [10, 41, 8, 16, 20, 36, 9, 13, 20]);
  });
});
