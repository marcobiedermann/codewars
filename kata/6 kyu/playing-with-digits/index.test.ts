import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import digPow from './index.ts';

describe('digPow', () => {
  it('should return a positive integer if exists such as the sum of the digits is equal to `k` * `n`', () => {
    assert.strictEqual(digPow(89, 1), 1);
    assert.strictEqual(digPow(92, 1), -1);
    assert.strictEqual(digPow(46288, 3), 51);
  });
});
