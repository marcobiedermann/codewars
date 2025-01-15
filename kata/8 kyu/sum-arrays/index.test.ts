import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import sum from './index.ts';

describe('sum', () => {
  it('should sum all numbers in array', () => {
    assert.strictEqual(sum([]), 0);
    assert.strictEqual(sum([1, 5.2, 4, 0, -1]), 9.2);
  });
});
