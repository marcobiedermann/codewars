import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import multiplyAll from './index.ts';

describe('multiplyAll', () => {
  it('should multiply each element in array with integer', () => {
    assert.strictEqual(Array.isArray(multiplyAll([1])(1)), true);
    assert.strictEqual(multiplyAll([1, 2])(1).length, 2);
    assert.deepEqual(multiplyAll([1, 2, 3])(1), [1, 2, 3]);
    assert.deepEqual(multiplyAll([1, 2, 3])(2), [2, 4, 6]);
    assert.deepEqual(multiplyAll([1, 2, 3])(0), [0, 0, 0]);
    assert.deepEqual(multiplyAll([])(10), []);
  });
});
