import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import shark from './index.ts';

describe('shark', () => {
  it('should return "Alive!" if you make it, if not, return "Shark Bait!".', () => {
    assert.strictEqual(shark(12, 50, 4, 8, true), 'Alive!');
    assert.strictEqual(shark(7, 55, 4, 16, true), 'Alive!');
    assert.strictEqual(shark(24, 0, 4, 8, true), 'Shark Bait!');
    assert.strictEqual(shark(24, 0, 4, 8, false), 'Shark Bait!');
  });
});
