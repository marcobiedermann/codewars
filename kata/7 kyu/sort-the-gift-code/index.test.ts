import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import sortGiftCode from './index.ts';

describe('sortGiftCode', () => {
  it('should sort letters in string', () => {
    assert.strictEqual(sortGiftCode('abcdef'), 'abcdef');
    assert.strictEqual(sortGiftCode('pqksuvy'), 'kpqsuvy');
    assert.strictEqual(sortGiftCode('zyxwvutsrqponmlkjihgfedcba'), 'abcdefghijklmnopqrstuvwxyz');
  });
});
