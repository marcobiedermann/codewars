import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import persistence from './index.ts';

describe('persistence', () => {
  it('should multiply digits until it reach a single digit', () => {
    assert.strictEqual(persistence(39), 3);
    assert.strictEqual(persistence(4), 0);
    assert.strictEqual(persistence(25), 2);
    assert.strictEqual(persistence(999), 4);
  });
});
