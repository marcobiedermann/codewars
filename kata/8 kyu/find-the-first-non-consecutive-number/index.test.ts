import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import firstNonConsecutive from './index.ts';

describe('firstNonConsecutive', () => {
  it('should find first non consecutive element', () => {
    assert.strictEqual(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]), 6);
  });
});
