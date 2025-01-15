import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import replace from './index.ts';

describe('replace', () => {
  it('should replace all vowel by exclamation mark', () => {
    assert.strictEqual(replace('Hi!'), 'H!!');
    assert.strictEqual(replace('!Hi! Hi!'), '!H!! H!!');
    assert.strictEqual(replace('aeiou'), '!!!!!');
    assert.strictEqual(replace('ABCDE'), '!BCD!');
  });
});
