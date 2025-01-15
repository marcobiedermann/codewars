import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import findMissing from './index.ts';

describe('findMissing', () => {
  it('should find missing term in in arithmetic progression', () => {
    assert.strictEqual(findMissing([1, 3, 4]), 2);
  });
});
