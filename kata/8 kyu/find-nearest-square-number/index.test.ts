import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import nearestSq from './index.ts';

describe('nearestSq', () => {
  it('should find nearest square number', () => {
    assert.strictEqual(nearestSq(1), 1);
    assert.strictEqual(nearestSq(2), 1);
    assert.strictEqual(nearestSq(10), 9);
    assert.strictEqual(nearestSq(111), 121);
    assert.strictEqual(nearestSq(9999), 10000);
  });
});
