import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import check from './index.ts';

describe('check', () => {
  it('should check if array contains value', () => {
    assert.strictEqual(check([66, 101], 66), true);
    assert.strictEqual(check([80, 117, 115, 104, 45, 85, 112, 115], 45), true);
    assert.strictEqual(check(['t', 'e', 's', 't'], 'e'), true);
    assert.strictEqual(check(['what', 'a', 'great', 'kata'], 'kat'), false);
  });
});
