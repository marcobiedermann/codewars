import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import countBits from './index.ts';

describe('countBits', () => {
  it('should return the number of bits what are one', () => {
    assert.strictEqual(countBits(0), 0);
    assert.strictEqual(countBits(4), 1);
    assert.strictEqual(countBits(7), 3);
    assert.strictEqual(countBits(9), 2);
    assert.strictEqual(countBits(10), 2);
  });
});
