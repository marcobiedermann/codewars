import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import wordsToMarks from './index.ts';

describe('wordsToMarks', () => {
  it('should sum up char codes of characters in string', () => {
    assert.strictEqual(wordsToMarks('attitude'), 100);
    assert.strictEqual(wordsToMarks('friends'), 75);
    assert.strictEqual(wordsToMarks('family'), 66);
    assert.strictEqual(wordsToMarks('selfness'), 99);
    assert.strictEqual(wordsToMarks('knowledge'), 96);
  });
});
