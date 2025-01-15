import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import isDivisible from './index.ts';

describe('isDivisible', () => {
  it('should check if product is divisible by number', () => {
    assert.strictEqual(isDivisible(4050, 27), true);
    assert.strictEqual(isDivisible(4066, 27), false);
    assert.strictEqual(isDivisible(10000, 20), true);
    assert.strictEqual(isDivisible(10005, 20), false);
    assert.strictEqual(isDivisible(10005, 1), true);
  });
});
