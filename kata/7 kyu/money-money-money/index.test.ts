import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import calculateYears from './index.ts';

describe('calculateYears', () => {
  it('should calculate years to reach investment', () => {
    assert.strictEqual(calculateYears(1000, 0.05, 0.18, 1100), 3);
    assert.strictEqual(calculateYears(1000, 0.01625, 0.18, 1200), 14);
    assert.strictEqual(calculateYears(1000, 0.05, 0.18, 1000), 0);
  });
});
