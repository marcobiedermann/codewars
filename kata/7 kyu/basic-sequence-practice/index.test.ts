import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import sumOfN from './index.ts';

describe('sumOfN', () => {
  it('should', () => {
    assert.deepEqual(sumOfN(3), [0, 1, 3, 6]);
    assert.deepEqual(sumOfN(-4), [0, -1, -3, -6, -10]);
    assert.deepEqual(sumOfN(1), [0, 1]);
    assert.deepEqual(sumOfN(-6), [0, -1, -3, -6, -10, -15, -21]);
  });
});
