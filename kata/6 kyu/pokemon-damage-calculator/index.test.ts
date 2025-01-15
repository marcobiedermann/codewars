import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import calculateDamage from './index.ts';

describe('calculateDamage', () => {
  it('should calculate move damage', () => {
    assert.strictEqual(calculateDamage('fire', 'water', 100, 100), 25);
    assert.strictEqual(calculateDamage('grass', 'water', 100, 100), 100);
    assert.strictEqual(calculateDamage('electric', 'fire', 100, 100), 50);
    assert.strictEqual(calculateDamage('grass', 'electric', 57, 19), 150);
    assert.strictEqual(calculateDamage('grass', 'water', 40, 40), 100);
    assert.strictEqual(calculateDamage('grass', 'fire', 35, 5), 175);
    assert.strictEqual(calculateDamage('fire', 'electric', 10, 2), 250);
  });
});
