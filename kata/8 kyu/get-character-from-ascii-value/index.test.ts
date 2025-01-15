import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import getChar from './index.ts';

describe('getChar', () => {
  it('should return ASCII char of value', () => {
    assert.strictEqual(getChar(55), '7');
    assert.strictEqual(getChar(56), '8');
    assert.strictEqual(getChar(57), '9');
    assert.strictEqual(getChar(58), ':');
    assert.strictEqual(getChar(59), ';');
    assert.strictEqual(getChar(60), '<');
    assert.strictEqual(getChar(61), '=');
    assert.strictEqual(getChar(62), '>');
    assert.strictEqual(getChar(63), '?');
    assert.strictEqual(getChar(64), '@');
    assert.strictEqual(getChar(65), 'A');
  });
});
