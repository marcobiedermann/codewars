import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import SubtractSum from './index.ts';

describe('subtractSum', () => {
  it('should subtract the sum', () => {
    assert.strictEqual(SubtractSum(10), 'apple');
    assert.strictEqual(SubtractSum(325), 'apple');
  });
});
