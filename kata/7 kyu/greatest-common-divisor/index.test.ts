import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import mygcd from './index.ts';

describe('mygcd', () => {
  it('should return greatest common divisor', () => {
    assert.strictEqual(mygcd(30, 12), 6);
    assert.strictEqual(mygcd(8, 9), 1);
    assert.strictEqual(mygcd(1, 1), 1);
  });
});
