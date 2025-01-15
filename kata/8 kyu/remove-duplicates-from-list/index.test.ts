import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import distinct from './index.ts';

describe('distinct', () => {
  it('should filter duplicated items', () => {
    assert.deepEqual(distinct([1]), [1]);
    assert.deepEqual(distinct([1, 2]), [1, 2]);
    assert.deepEqual(distinct([1, 1, 2]), [1, 2]);
  });
});
