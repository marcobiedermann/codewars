import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import hasUniqueChars from './index.ts';

describe('hasUniqueChars', () => {
  it('should check if a string contains only unique characters', () => {
    assert.strictEqual(hasUniqueChars('  nAa'), false);
    assert.strictEqual(hasUniqueChars('abcdef'), true);
    assert.strictEqual(hasUniqueChars('aA'), true);
    assert.strictEqual(hasUniqueChars('++-'), false);
  });
});
