import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import uniqueInOrder from './index.ts';

describe('uniqueInOrder', () => {
  it('should return unique items in order', () => {
    assert.deepEqual(uniqueInOrder('AAAABBBCCDAABBB'), ['A', 'B', 'C', 'D', 'A', 'B']);
  });
});
