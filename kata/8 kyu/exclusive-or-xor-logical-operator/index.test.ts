import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import xor from './index.ts';

describe('xor', () => {
  it('should return `true` if exactly one of the two expressions evaluate to `true`', () => {
    assert.strictEqual(xor(false, false), false);
    assert.strictEqual(xor(true, false), true);
    assert.strictEqual(xor(false, true), true);
    assert.strictEqual(xor(true, true), false);
  });
});
