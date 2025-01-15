import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import Xbonacci from './index.ts';

describe('xbonacci', () => {
  it('should return a xbonacci sequence', () => {
    assert.deepEqual(Xbonacci([0, 1], 10), [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    assert.deepEqual(Xbonacci([1, 1], 10), [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
    assert.deepEqual(Xbonacci([0, 0, 0, 0, 1], 10), [0, 0, 0, 0, 1, 1, 2, 4, 8, 16]);
    assert.deepEqual(Xbonacci([1, 0, 0, 0, 0, 0, 1], 10), [1, 0, 0, 0, 0, 0, 1, 2, 3, 6]);
    assert.deepEqual(
      Xbonacci([1, 0, 0, 0, 0, 0, 0, 0, 0, 0], 20),
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 4, 8, 16, 32, 64, 128, 256],
    );
  });
});
