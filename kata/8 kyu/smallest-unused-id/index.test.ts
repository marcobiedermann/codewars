import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import nextId from './index.ts';

describe('nextId', () => {
  it('should', () => {
    assert.strictEqual(nextId([0, 1, 2, 3, 5]), 4);
    assert.strictEqual(nextId([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 11);
  });
});
