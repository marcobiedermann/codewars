import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import flip from './index.ts';

describe('flip', () => {
  it('should move items to left or right', () => {
    assert.deepEqual(flip('R', [3, 2, 1, 2]), [1, 2, 2, 3]);
    assert.deepEqual(flip('L', [1, 4, 5, 3, 5]), [5, 5, 4, 3, 1]);
  });
});
