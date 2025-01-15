import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import boolToWord from './index.ts';

describe('boolToWord', () => {
  it('should convert boolean to word', () => {
    assert.strictEqual(boolToWord(true), 'Yes');
    assert.strictEqual(boolToWord(false), 'No');
  });
});
