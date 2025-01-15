import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import maxSequence from './index.ts';

describe('maxSequence', () => {
  it('should return max sum of subarray', () => {
    assert.strictEqual(maxSequence([]), 0);
    assert.strictEqual(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
  });
});
