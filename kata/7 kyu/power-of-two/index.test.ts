import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import isPowerOfTwo from './index.ts';

describe('isPowerOfTwo', () => {
  it('should check if number is a power of two', () => {
    assert.strictEqual(isPowerOfTwo(2), true);
    assert.strictEqual(isPowerOfTwo(4096), true);
    assert.strictEqual(isPowerOfTwo(5), false);
  });
});
