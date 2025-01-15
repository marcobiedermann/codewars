import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import calculateTip from './index.ts';

describe('calculateTip', () => {
  it('should calculate tip', () => {
    assert.strictEqual(calculateTip(20, 'Excellent'), 4);
    assert.strictEqual(calculateTip(26.95, 'good'), 3);
    assert.strictEqual(calculateTip(20, 'hi'), 'Rating not recognised');
  });
});
