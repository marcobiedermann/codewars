import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import isDivisible from './index.ts';

describe('isDivisible', () => {
  it('should check if `x` is divisible by `y`', () => {
    assert.strictEqual(isDivisible(3, 3, 4), false);
    assert.strictEqual(isDivisible(12, 3, 4), true);
    assert.strictEqual(isDivisible(8, 3, 4), false);
    assert.strictEqual(isDivisible(48, 3, 4), true);
  });
});
