import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import isPangram from './index.ts';

describe('isPangram', () => {
  it('should detect if string is pangram', () => {
    assert.strictEqual(isPangram('The quick brown fox jumps over the lazy dog.'), true);
    assert.strictEqual(isPangram('This is not a pangram.'), false);
  });
});
