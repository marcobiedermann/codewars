import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import flatten from './index.ts';

describe('flatten', () => {
  it('should flatten `Array` of `Array`', () => {
    assert.deepEqual(flatten([]), []);
    assert.deepEqual(flatten([1, 2, 3]), [1, 2, 3]);
    assert.deepEqual(
      flatten([
        [1, 2, 3],
        ['a', 'b', 'c'],
        [1, 2, 3],
      ]),
      [1, 2, 3, 'a', 'b', 'c', 1, 2, 3],
    );
    assert.deepEqual(flatten([[3, 4, 5], [[9, 9, 9]], ['a,b,c']]), [3, 4, 5, [9, 9, 9], 'a,b,c']);
    assert.deepEqual(flatten([[[3], [4], [5]], [9], [9], [8], [[1, 2, 3]]]), [
      [3],
      [4],
      [5],
      9,
      9,
      8,
      [1, 2, 3],
    ]);
  });
});
