import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import roundToNext5 from './index.ts';

describe('roundToNext5', () => {
  it('should round to the next multiple of 5', () => {
    assert.strictEqual(roundToNext5(0), 0);
    assert.strictEqual(roundToNext5(1), 5);
    assert.strictEqual(roundToNext5(3), 5);
    assert.strictEqual(roundToNext5(5), 5);
    assert.strictEqual(roundToNext5(7), 10);
    assert.strictEqual(roundToNext5(39), 40);
  });
});
