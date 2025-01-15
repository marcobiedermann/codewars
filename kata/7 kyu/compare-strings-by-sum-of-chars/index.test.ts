import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import compare from './index.ts';

describe('compare', () => {
  it('should compare two strings by their values', () => {
    assert.strictEqual(compare('AD', 'BC'), true);
    assert.strictEqual(compare('AD', 'DD'), false);
    assert.strictEqual(compare('!!', '??'), true);
    assert.strictEqual(compare(null, null), true);
  });
});
