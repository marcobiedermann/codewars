import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import invert from './index.ts';

describe('invent', () => {
  it('should return inverse of each', () => {
    assert.deepEqual(invert([1, 2, 3, 4, 5]), [-1, -2, -3, -4, -5]);
    assert.deepEqual(invert([1, -2, 3, -4, 5]), [-1, 2, -3, 4, -5]);
    assert.deepEqual(invert([]), []);
    assert.deepEqual(invert([0]), [0]);
  });
});
