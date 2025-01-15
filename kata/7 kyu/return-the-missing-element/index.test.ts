import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import getMissingElement from './index.ts';

describe('getMissingElement', () => {
  it('should find the missing element in the sequence', () => {
    assert.strictEqual(getMissingElement([0, 5, 1, 3, 2, 9, 7, 6, 4]), 8);
    assert.strictEqual(getMissingElement([9, 2, 4, 5, 7, 0, 8, 6, 1]), 3);
  });
});
