import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import sumArray from './index.ts';

describe('sumArray', () => {
  it('should sum all numbers except the highest and lowest', () => {
    assert.strictEqual(sumArray([6, 2, 1, 8, 10]), 16);
    assert.strictEqual(sumArray(), 0);
    assert.strictEqual(sumArray(null), 0);
    assert.strictEqual(sumArray([1]), 0);
  });
});
