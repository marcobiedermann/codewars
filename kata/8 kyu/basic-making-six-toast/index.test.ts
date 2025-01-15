import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import sixToast from './index.ts';

describe('sixToast', () => {
  it('should count the number of pieces of toast', () => {
    assert.strictEqual(sixToast(6), 0);
    assert.strictEqual(sixToast(17), 11);
    assert.strictEqual(sixToast(3), 3);
  });
});
