import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import twistedSum from './index.ts';

describe('twistedSum', () => {
  it('should return the sum of the digits of all numbers from 1 to `n`', () => {
    assert.strictEqual(twistedSum(3), 6);
    assert.strictEqual(twistedSum(10), 46);
    assert.strictEqual(twistedSum(11), 48);
    assert.strictEqual(twistedSum(12), 51);
  });
});
