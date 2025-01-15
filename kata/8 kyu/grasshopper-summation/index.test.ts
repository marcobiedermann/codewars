import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import summation from './index.ts';

describe('summation', () => {
  it('should return the summation of every number from 1 to `n`', () => {
    assert.strictEqual(summation(1), 1);
    assert.strictEqual(summation(8), 36);
  });
});
