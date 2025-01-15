import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import sumMul from './index.ts';

describe('sumMul', () => {
  it('should return the sum of all multiples of `n` below `m`', () => {
    assert.strictEqual(sumMul(0, 0), 'INVALID');
    assert.strictEqual(sumMul(2, 9), 20);
    assert.strictEqual(sumMul(4, -7), 'INVALID');
  });
});
