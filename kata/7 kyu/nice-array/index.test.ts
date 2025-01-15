import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import isNice from './index.ts';

describe('isNice', () => {
  it('should check if array is nice', () => {
    assert.strictEqual(isNice([2, 10, 9, 3]), true);
    assert.strictEqual(isNice([3, 4, 5, 7]), false);
    assert.strictEqual(isNice([]), false);
  });
});
