import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import squareSum from './index.ts';

describe('squareSum', () => {
  it('should square each number', () => {
    assert.strictEqual(squareSum([1, 2]), 5);
    assert.strictEqual(squareSum([0, 3, 4, 5]), 50);
  });
});
