import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import palindromeChainLength from './index.ts';

describe('palindromeChainLength', () => {
  it('should', () => {
    assert.strictEqual(palindromeChainLength(87), 4);
  });
});
