import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import between from './index.ts';

describe('between', () => {
  it('should return all integers between the lower and upper boundaries, including', () => {
    assert.deepEqual(between(1, 4), [1, 2, 3, 4]);
    assert.deepEqual(between(-2, 2), [-2, -1, 0, 1, 2]);
  });
});
