import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import pattern from './index.ts';

describe('pattern', () => {
  it('should return pattern', () => {
    assert.strictEqual(pattern(1), '1');
    assert.strictEqual(pattern(2), '1\n22');
    assert.strictEqual(pattern(5), '1\n22\n333\n4444\n55555');
  });
});
