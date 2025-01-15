import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import slope from './index.ts';

describe('slope', () => {
  it('should return string represenation of slope', () => {
    assert.strictEqual(slope([19, 3, 20, 3]), '0');
    assert.strictEqual(slope([2, 7, 4, -7]), '-7');
    assert.strictEqual(slope([10, 50, 30, 150]), '5');
    assert.strictEqual(slope([15, 45, 12, 60]), '-5');
    assert.strictEqual(slope([10, 20, 20, 80]), '6');
    assert.strictEqual(slope([-10, 6, -10, 3]), 'undefined');
  });
});
