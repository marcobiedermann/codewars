import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import divide from './index.ts';

describe('divide', () => {
  it('should check if number is evenly divisible', () => {
    assert.strictEqual(divide(4), true);
    assert.strictEqual(divide(2), false);
    assert.strictEqual(divide(5), false);
    assert.strictEqual(divide(88), true);
    assert.strictEqual(divide(100), true);
    assert.strictEqual(divide(67), false);
    assert.strictEqual(divide(90), true);
    assert.strictEqual(divide(10), true);
    assert.strictEqual(divide(99), false);
    assert.strictEqual(divide(32), true);
  });
});
