import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import arr from './index.ts';

describe('arr', () => {
  it('should return an array', () => {
    assert.strictEqual(arr() instanceof Array, true);
  });

  it('should return a blank array when called with no argument', () => {
    assert.deepEqual(arr(), []);
  });

  it('should return 0 to 3 when called with 4', () => {
    assert.deepEqual(arr(4), [0, 1, 2, 3]);
  });
});
