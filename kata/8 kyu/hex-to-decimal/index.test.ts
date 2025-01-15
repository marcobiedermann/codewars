import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import hexToDec from './index.ts';

describe('hexToDec', () => {
  it('should convert hex to decimal', () => {
    assert.strictEqual(hexToDec('1'), 1);
    assert.strictEqual(hexToDec('a'), 10);
    assert.strictEqual(hexToDec('10'), 16);
    assert.strictEqual(hexToDec('FF'), 255);
    assert.strictEqual(hexToDec('-C'), -12);
  });
});
