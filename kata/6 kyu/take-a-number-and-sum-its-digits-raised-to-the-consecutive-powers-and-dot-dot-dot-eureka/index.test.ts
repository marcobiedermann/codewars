import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import sumDigPow from './index.ts';

describe('sumDigPow', () => {
  it('should return list of numbers which digits raised to their consecutive power is same as number', () => {
    assert.deepEqual(sumDigPow(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    assert.deepEqual(sumDigPow(1, 100), [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]);
    assert.deepEqual(sumDigPow(10, 100), [89]);
    assert.deepEqual(sumDigPow(90, 100), []);
    assert.deepEqual(sumDigPow(90, 150), [135]);
    assert.deepEqual(sumDigPow(50, 150), [89, 135]);
    assert.deepEqual(sumDigPow(10, 150), [89, 135]);
  });
});
