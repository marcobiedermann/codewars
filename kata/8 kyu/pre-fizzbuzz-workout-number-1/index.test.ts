import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import preFizz from './index.ts';

describe('preFizz', () => {
  it('should return an array of positive integers from 1 to `n`', () => {
    assert.deepEqual(preFizz(1), [1]);
    assert.deepEqual(preFizz(2), [1, 2]);
    assert.deepEqual(preFizz(3), [1, 2, 3]);
    assert.deepEqual(preFizz(4), [1, 2, 3, 4]);
    assert.deepEqual(preFizz(5), [1, 2, 3, 4, 5]);
  });
});
