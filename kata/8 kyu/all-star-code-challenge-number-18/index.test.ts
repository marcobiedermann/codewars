import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import strCount from './index.ts';

describe('strCount', () => {
  it('should count occurrences of letter in word', () => {
    assert.strictEqual(strCount('Hello', 'o'), 1);
    assert.strictEqual(strCount('Hello', 'l'), 2);
    assert.strictEqual(strCount('', 'z'), 0);
  });
});
