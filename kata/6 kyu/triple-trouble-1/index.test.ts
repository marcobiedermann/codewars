import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import tripledouble from './index.ts';

describe('tripledouble', () => {
  it('should check for triple and double', () => {
    assert.strictEqual(tripledouble(451999277, 41177722899), 1);
    assert.strictEqual(tripledouble(1222345, 12345), 0);
    assert.strictEqual(tripledouble(12345, 12345), 0);
    assert.strictEqual(tripledouble(666789, 12345667), 1);
    assert.strictEqual(tripledouble(10560002, 100), 1);
    assert.strictEqual(tripledouble(1112, 122), 0);
  });
});
