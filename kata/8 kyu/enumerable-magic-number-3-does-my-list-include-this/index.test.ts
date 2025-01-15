import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import include from './index.ts';

describe('include', () => {
  it('should check if item is in list', () => {
    assert.strictEqual(include([1, 2, 3, 4], 3), true);
    assert.strictEqual(include([1, 2, 4, 5], 3), false);
  });
});
