import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import binToDec from './index.ts';

describe('binToDec', () => {
  it('should convert binary to decimal number', () => {
    assert.strictEqual(binToDec('1'), 1);
    assert.strictEqual(binToDec('0'), 0);
    assert.strictEqual(binToDec('1001001'), 73);
  });
});
