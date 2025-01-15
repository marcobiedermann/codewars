import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import twoOldestAges from './index.ts';

describe('twoOldestAges', () => {
  it('should return two oldest ages', () => {
    assert.deepEqual(twoOldestAges([1, 2, 10, 8]), [8, 10]);
  });
});
