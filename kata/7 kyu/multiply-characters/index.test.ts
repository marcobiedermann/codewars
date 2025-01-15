import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import spam from './index.ts';

describe('spam', () => {
  it('should repeat the word `n` times', () => {
    assert.strictEqual(spam(1), 'hue');
    assert.strictEqual(spam(6), 'huehuehuehuehuehue');
    assert.strictEqual(spam(14), 'huehuehuehuehuehuehuehuehuehuehuehuehuehue');
  });
});
