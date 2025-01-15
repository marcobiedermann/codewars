import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import houseNumbersSum from './index.ts';

describe('houseNumbersSum', () => {
  it('should return sum of house numbers', () => {
    assert.strictEqual(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]), 11);
    assert.strictEqual(houseNumbersSum([4, 2, 1, 6, 0]), 13);
    assert.strictEqual(houseNumbersSum([4, 1, 2, 3, 0, 10, 2]), 10);
    assert.strictEqual(houseNumbersSum([0, 1, 2, 3, 4, 5]), 0);
  });
});
