import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import halvingSum from './index.ts';

describe('halvingSum', () => {
  it('should return sum of integer division', () => {
    assert.strictEqual(halvingSum(25), 47);
    assert.strictEqual(halvingSum(127), 247);
  });
});
