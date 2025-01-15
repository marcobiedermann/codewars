import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import websites from './index.ts';

describe('websites', () => {
  it('should contain `codewars` in the array', () => {
    assert.strictEqual(websites.includes('codewars'), true);
    assert.notStrictEqual(websites.length, 0);
    assert.strictEqual(websites.length, 1);
  });
});
