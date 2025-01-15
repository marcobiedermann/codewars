import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import rowSumOddNumbers from './index.ts';

describe('rowSumOddNumbers', () => {
  it('should return row sum of consecutive odd numbers', () => {
    assert.strictEqual(rowSumOddNumbers(1), 1);
    assert.strictEqual(rowSumOddNumbers(42), 74088);
  });
});
