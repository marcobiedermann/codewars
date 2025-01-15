import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import isSquare from './index.ts';

describe('isSquare', () => {
  it('should check if number is square', () => {
    assert.strictEqual(isSquare(-1), false);
    assert.strictEqual(isSquare(0), true);
    assert.strictEqual(isSquare(3), false);
    assert.strictEqual(isSquare(4), true);
    assert.strictEqual(isSquare(25), true);
    assert.strictEqual(isSquare(26), false);
  });
});
