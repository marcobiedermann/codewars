import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import matrixAddition from './index.ts';

describe('matrixAddition', () => {
  it('should add two matrices', () => {
    assert.deepEqual(
      matrixAddition(
        [
          [1, 2],
          [1, 2],
        ],
        [
          [2, 3],
          [2, 3],
        ],
      ),
      [
        [3, 5],
        [3, 5],
      ],
    );
    assert.deepEqual(matrixAddition([[1]], [[2]]), [[3]]);
    assert.deepEqual(
      matrixAddition(
        [
          [1, 2, 3],
          [3, 2, 1],
          [1, 1, 1],
        ],
        [
          [2, 2, 1],
          [3, 2, 3],
          [1, 1, 3],
        ],
      ),
      [
        [3, 4, 4],
        [6, 4, 4],
        [2, 2, 4],
      ],
    );
  });
});
