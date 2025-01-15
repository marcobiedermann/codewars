import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import inAscOrder from './index.ts';

describe('inAscOrder', () => {
  it('should check if numbers are in order', () => {
    assert.strictEqual(inAscOrder([1, 2, 4, 7, 19]), true);
    assert.strictEqual(inAscOrder([1, 2, 3, 4, 5]), true);
    assert.strictEqual(inAscOrder([1, 6, 10, 18, 2, 4, 20]), false);
    assert.strictEqual(inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1]), false);
  });
});
