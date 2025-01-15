import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import arrayPlusArray from './index.ts';

describe('arrayPlusArray', () => {
  it('should sum elements', () => {
    assert.strictEqual(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
    assert.strictEqual(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
    assert.strictEqual(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
    assert.strictEqual(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);
  });
});
