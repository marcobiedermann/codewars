import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import checkForFactor from './index.ts';

describe('checkForFactor', () => {
  it('should return true', () => {
    assert.strictEqual(checkForFactor(10, 2), true);
    assert.strictEqual(checkForFactor(63, 7), true);
    assert.strictEqual(checkForFactor(2450, 5), true);
    assert.strictEqual(checkForFactor(24612, 3), true);
  });

  it('should return false', () => {
    assert.strictEqual(checkForFactor(9, 2), false);
    assert.strictEqual(checkForFactor(653, 7), false);
    assert.strictEqual(checkForFactor(2453, 5), false);
    assert.strictEqual(checkForFactor(24617, 3), false);
  });
});
