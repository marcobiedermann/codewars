import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import lowercaseCount from './index.ts';

describe('lowercaseCount', () => {
  it('should cound lowercase letters in string', () => {
    assert.strictEqual(lowercaseCount('abc'), 3);
    assert.strictEqual(lowercaseCount('abcABC123'), 3);
    assert.strictEqual(lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|':;?/>.<,~"), 3);
    assert.strictEqual(lowercaseCount(''), 0);
    assert.strictEqual(lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|':;?/>.<,~"), 0);
    assert.strictEqual(lowercaseCount('abcdefghijklmnopqrstuvwxyz'), 26);
  });
});
