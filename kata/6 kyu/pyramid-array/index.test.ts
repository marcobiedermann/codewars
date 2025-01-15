import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import pyramid from './index.ts';

describe('pyramid', () => {
  it('should return an array of ascending length subarrays', () => {
    assert.deepEqual(pyramid(0), []);
    assert.deepEqual(pyramid(1), [[1]]);
    assert.deepEqual(pyramid(2), [[1], [1, 1]]);
    assert.deepEqual(pyramid(3), [[1], [1, 1], [1, 1, 1]]);
  });
});
