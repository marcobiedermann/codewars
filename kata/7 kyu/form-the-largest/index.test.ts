import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import maxNumber from './index.ts';

describe('maxNumber', () => {
  it('should return maximum number from digitis of number', () => {
    assert.strictEqual(maxNumber(213), 321);
    assert.strictEqual(maxNumber(7389), 9873);
    assert.strictEqual(maxNumber(63792), 97632);
    assert.strictEqual(maxNumber(566797), 977665);
    assert.strictEqual(maxNumber(1000000), 1000000);
  });
});
