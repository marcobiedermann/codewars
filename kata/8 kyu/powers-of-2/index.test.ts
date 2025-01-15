import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import powersOfTwo from './index.ts';

describe('powersOfTwo', () => {
  it('should return list of all the powers of 2', () => {
    assert.deepEqual(powersOfTwo(0), [1]);
    assert.deepEqual(powersOfTwo(1), [1, 2]);
    assert.deepEqual(powersOfTwo(4), [1, 2, 4, 8, 16]);
  });
});
