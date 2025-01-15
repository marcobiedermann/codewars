import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import findSum from './index.ts';

describe('findSum', () => {
  it('should sum all products of `3` or `5`', () => {
    assert.strictEqual(findSum(5), 8);
    assert.strictEqual(findSum(10), 33);
  });
});
