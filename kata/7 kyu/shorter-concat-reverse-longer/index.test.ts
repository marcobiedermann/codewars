import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import shorter_reverse_longer from './index.ts';

describe('shorter_reverse_longer', () => {
  it('should concatenate the shorter string and the longer string in reversed order', () => {
    assert.strictEqual(shorter_reverse_longer('first', 'abcde'), 'abcdetsrifabcde');
    assert.strictEqual(shorter_reverse_longer('hello', 'bau'), 'bauollehbau');
    assert.strictEqual(shorter_reverse_longer('abcde', 'fghi'), 'fghiedcbafghi');
  });
});
