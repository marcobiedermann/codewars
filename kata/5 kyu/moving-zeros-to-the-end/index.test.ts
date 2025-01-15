import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import moveZeros from './index.ts';

describe('moveZeros', () => {
  it('should move all zeros to the end', () => {
    assert.deepEqual(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]), [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]);
  });
});
