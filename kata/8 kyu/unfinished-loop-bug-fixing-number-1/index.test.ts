import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import createArray from './index.ts';

describe('createArray', () => {
  it('should return array of each number in sequence', () => {
    assert.deepEqual(createArray(1), [1]);
    assert.deepEqual(createArray(2), [1, 2]);
    assert.deepEqual(createArray(3), [1, 2, 3]);
    assert.deepEqual(createArray(4), [1, 2, 3, 4]);
    assert.deepEqual(createArray(5), [1, 2, 3, 4, 5]);
  });
});
