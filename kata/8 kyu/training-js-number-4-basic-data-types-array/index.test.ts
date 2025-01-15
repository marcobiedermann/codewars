import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { getFirst, getLast, getLength, popElement, pushElement } from './index.ts';

describe('array', () => {
  it('should perform operations on array', () => {
    assert.strictEqual(getLength([1, 2, 3]), 3);
    assert.strictEqual(getFirst([1, 2, 3]), 1);
    assert.strictEqual(getLast([1, 2, 3]), 3);
    assert.strictEqual(pushElement([1, 2, 3]).length, 4);
    assert.strictEqual(popElement([1, 2, 3]).length, 2);
  });
});
