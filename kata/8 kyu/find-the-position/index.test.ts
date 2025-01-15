import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import position from './index.ts';

describe('position', () => {
  it('should position of letter in alphabet', () => {
    assert.strictEqual(position('a'), 'Position of alphabet: 1');
    assert.strictEqual(position('z'), 'Position of alphabet: 26');
    assert.strictEqual(position('e'), 'Position of alphabet: 5');
  });
});
