import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import sameCase from './index.ts';

describe('sameCase', () => {
  it('should check if two given characters are the same case', () => {
    assert.strictEqual(sameCase('C', 'B'), 1);
    assert.strictEqual(sameCase('b', 'a'), 1);
    assert.strictEqual(sameCase('d', 'd'), 1);
    assert.strictEqual(sameCase('A', 's'), 0);
    assert.strictEqual(sameCase('c', 'B'), 0);
    assert.strictEqual(sameCase('b', 'Z'), 0);
    assert.strictEqual(sameCase('\t', 'Z'), -1);
    assert.strictEqual(sameCase('H', ':'), -1);
  });
});
