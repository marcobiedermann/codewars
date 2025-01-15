import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import evenChars from './index.ts';

describe('evenChars', () => {
  it('should return even characters', () => {
    assert.strictEqual(evenChars('a'), 'invalid string');
    assert.deepEqual(evenChars('abcdefghijklm'), ['b', 'd', 'f', 'h', 'j', 'l']);
  });
});
