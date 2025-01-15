import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import getRealFloor from './index.ts';

describe('getRealFloor', () => {
  it('should return the floor in the european system', () => {
    assert.strictEqual(getRealFloor(0), 0);
    assert.strictEqual(getRealFloor(1), 0);
    assert.strictEqual(getRealFloor(5), 4);
    assert.strictEqual(getRealFloor(15), 13);
  });
});
