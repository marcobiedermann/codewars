import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import stray from './index.ts';

describe('stray', () => {
  it('should find single different number', () => {
    assert.strictEqual(stray([1, 1, 2]), 2);
    assert.strictEqual(stray([17, 17, 3, 17, 17, 17, 17]), 3);
  });
});
