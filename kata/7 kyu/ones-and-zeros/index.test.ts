import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import binaryArrayToNumber from './index.ts';

describe('binaryArrayToNumber', () => {
  it('should convert binary value in array to integer', () => {
    assert.strictEqual(binaryArrayToNumber([0, 0, 0, 1]), 1);
    assert.strictEqual(binaryArrayToNumber([0, 0, 1, 0]), 2);
    assert.strictEqual(binaryArrayToNumber([1, 1, 1, 1]), 15);
    assert.strictEqual(binaryArrayToNumber([0, 1, 1, 0]), 6);
  });
});
