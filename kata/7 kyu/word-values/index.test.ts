import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import wordValue from './index.ts';

describe('wordValue', () => {
  it('should count word value', () => {
    assert.deepEqual(wordValue(['codewars', 'abc', 'xyz']), [88, 12, 225]);
    assert.deepEqual(wordValue(['abc abc', 'abc abc', 'abc', 'abc']), [12, 24, 18, 24]);
  });
});
