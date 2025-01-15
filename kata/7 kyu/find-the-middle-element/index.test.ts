import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import gimme from './index.ts';

describe('gimme', () => {
  it('should return middle element of triplet', () => {
    assert.strictEqual(gimme([2, 3, 1]), 0);
    assert.strictEqual(gimme([5, 10, 14]), 1);
  });
});
