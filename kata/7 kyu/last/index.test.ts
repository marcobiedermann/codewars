import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import last from './index.ts';

describe('last', () => {
  it('should get the last element of the given argument(s)', () => {
    assert.strictEqual(last([1, 2, 3, 4, 5]), 5);
    assert.strictEqual(last('abcde'), 'e');
    assert.strictEqual(last(1, 'b', 3, 'd', 5), 5);
  });
});
