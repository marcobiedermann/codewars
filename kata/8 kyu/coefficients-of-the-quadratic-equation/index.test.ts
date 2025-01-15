import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import quadratic from './index.ts';

describe('quadratic', () => {
  it('should return the coefficients of quadratic equation', () => {
    assert.deepEqual(quadratic(0, 1), [1, -1, 0]);
    assert.deepEqual(quadratic(1, 1), [1, -2, 1]);
    assert.deepEqual(quadratic(-4, -9), [1, 13, 36]);
    assert.deepEqual(quadratic(-5, -4), [1, 9, 20]);
    assert.deepEqual(quadratic(4, -9), [1, 5, -36]);
    assert.deepEqual(quadratic(5, -4), [1, -1, -20]);
  });
});
