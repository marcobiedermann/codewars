import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import isIntArray from './index.ts';

describe('isIntArray', () => {
  it('should check if every element in an array in an integer', () => {
    assert.strictEqual(isIntArray([]), true);
    assert.strictEqual(isIntArray([1, 2, 3, 4]), true);
    assert.strictEqual(isIntArray([1, 2, 3, NaN]), false);
  });
});
