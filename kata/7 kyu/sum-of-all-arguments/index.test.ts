import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import sum from './index.ts';

describe('sum', () => {
  it('should', () => {
    assert.strictEqual(sum(1), 1);
    assert.strictEqual(sum(1, 2), 3);
    assert.strictEqual(sum(5, 7, 9), 21);
    assert.strictEqual(sum(12, 1, 1, 1, 1), 16);
    assert.strictEqual(sum(12, 1, 1, 1, 1, 1, 1), 18);
  });
});
