import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import productFib from './index.ts';

describe('productFib', () => {
  it('should calculate product of consecutive fibonacci numbers', () => {
    assert.deepEqual(productFib(4895), [55, 89, true]);
    assert.deepEqual(productFib(5895), [89, 144, false]);
    assert.deepEqual(productFib(74049690), [6765, 10946, true]);
    assert.deepEqual(productFib(84049690), [10946, 17711, false]);
    assert.deepEqual(productFib(193864606), [10946, 17711, true]);
    assert.deepEqual(productFib(447577), [610, 987, false]);
    assert.deepEqual(productFib(602070), [610, 987, true]);
  });
});
