import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import cubeOdd from './index.ts';

describe('cubeOdd', () => {
  it('should return sum of odd numbers after cubing each', () => {
    assert.strictEqual(cubeOdd([1, 2, 3, 4]), 28);
    assert.strictEqual(cubeOdd([-3, -2, 2, 3]), 0);
    assert.strictEqual(cubeOdd(['a', 12, 9, 'z', 42]), undefined);
  });
});
