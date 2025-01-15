import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import countPositivesSumNegatives from './index.ts';

describe('countPositivesSumNegatives', () => {
  it('should count positive number and sum positive numbers', () => {
    assert.deepEqual(
      countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]),
      [10, -65],
    );
    assert.deepEqual(
      countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]),
      [8, -50],
    );
    assert.deepEqual(countPositivesSumNegatives([]), []);
    assert.deepEqual(countPositivesSumNegatives(null), []);
  });
});
