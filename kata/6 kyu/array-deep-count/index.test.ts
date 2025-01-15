import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import deepCount from './index.ts';

describe('deepCount', () => {
  it('should count all elements within an array, including inner-level arrays', () => {
    assert.strictEqual(deepCount([]), 0);
    assert.strictEqual(deepCount([1, 2, 3]), 3);
    assert.strictEqual(deepCount(['x', 'y', ['z']]), 4);
    assert.strictEqual(deepCount([1, 2, [3, 4, [5]]]), 7);
    assert.strictEqual(deepCount([[[[[[[[[]]]]]]]]]), 8);
  });
});
