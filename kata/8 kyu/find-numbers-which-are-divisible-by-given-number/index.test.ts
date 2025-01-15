import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import divisibleBy from './index.ts';

describe('divisibleBy', () => {
  it('should return numbers which are divisible by divisor', () => {
    assert.deepEqual(divisibleBy([1, 2, 3, 4, 5, 6], 2), [2, 4, 6]);
    assert.deepEqual(divisibleBy([1, 2, 3, 4, 5, 6], 3), [3, 6]);
    assert.deepEqual(divisibleBy([0, 1, 2, 3, 4, 5, 6], 4), [0, 4]);
    assert.deepEqual(divisibleBy([0], 4), [0]);
    assert.deepEqual(divisibleBy([1, 3, 5], 2), []);
  });
});
