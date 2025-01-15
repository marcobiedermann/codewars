import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import take from './index.ts';

describe('take', () => {
  it('should take `n` elements from array', () => {
    assert.deepEqual(take([0, 1, 2, 3, 5, 8, 13], 3), [0, 1, 2]);
  });
});
