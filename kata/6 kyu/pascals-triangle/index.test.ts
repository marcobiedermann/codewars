import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import pascalsTriangle from './index.ts';

describe('pascalsTriangle', () => {
  it('should return pascals triangle flattened into a list', () => {
    assert.deepEqual(pascalsTriangle(1), [1]);
    assert.deepEqual(pascalsTriangle(2), [1, 1, 1]);
    assert.deepEqual(pascalsTriangle(4), [1, 1, 1, 1, 2, 1, 1, 3, 3, 1]);
    assert.deepEqual(
      pascalsTriangle(6),
      [1, 1, 1, 1, 2, 1, 1, 3, 3, 1, 1, 4, 6, 4, 1, 1, 5, 10, 10, 5, 1],
    );
  });
});
