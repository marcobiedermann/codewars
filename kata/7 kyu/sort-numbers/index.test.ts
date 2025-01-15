import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import solution from './index.ts';

describe('solution', () => {
  it('should sort numbers', () => {
    assert.deepEqual(solution([1, 2, 10, 50, 5]), [1, 2, 5, 10, 50]);
    assert.deepEqual(solution(null), []);
  });
});
