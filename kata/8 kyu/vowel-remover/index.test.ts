import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import shortcut from './index.ts';

describe('shortcut', () => {
  it('should remove all lowercase vowels from string', () => {
    assert.strictEqual(shortcut('hello'), 'hll');
    assert.strictEqual(shortcut('how are you today?'), 'hw r y tdy?');
    assert.strictEqual(shortcut('complain'), 'cmpln');
    assert.strictEqual(shortcut('never'), 'nvr');
  });
});
