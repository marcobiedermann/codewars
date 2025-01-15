import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import findMultiples from './index.ts';

describe('findMultiples', () => {
  it('should find multiples of number', () => {
    assert.deepEqual(findMultiples(5, 25), [5, 10, 15, 20, 25]);
    assert.deepEqual(findMultiples(1, 2), [1, 2]);
    assert.deepEqual(findMultiples(5, 7), [5]);
    assert.deepEqual(findMultiples(4, 27), [4, 8, 12, 16, 20, 24]);
    assert.deepEqual(findMultiples(11, 54), [11, 22, 33, 44]);
  });
});
