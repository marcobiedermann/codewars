import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import digitize from './index.ts';

describe('digitize', () => {
  it('should return digits of number within an array in reversed order', () => {
    assert.deepEqual(digitize(35231), [1, 3, 2, 5, 3]);
  });
});
