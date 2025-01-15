import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import sumEvenNumbers from './index.ts';

describe('sumEvenNumbers', () => {
  it('should return the sum of the even values', () => {
    assert.strictEqual(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 30);
  });
});
