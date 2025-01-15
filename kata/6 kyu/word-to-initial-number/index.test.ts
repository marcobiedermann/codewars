import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import convert from './index.ts';

describe('convert', () => {
  it('should convert the word to number', () => {
    assert.strictEqual(convert('CodeWars'), 10234567);
    assert.strictEqual(convert('KATA'), 1020);
  });
});
