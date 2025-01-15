import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import printArray from './index.ts';

describe('printArray', () => {
  it('should join elements in array delimited by comma', () => {
    assert.strictEqual(printArray(['h', 'o', 'l', 'a']), 'h,o,l,a');
    assert.strictEqual(printArray([2, 4, 5, 2]), '2,4,5,2');
  });
});
