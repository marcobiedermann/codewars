import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import oddCount from './index.ts';

describe('oddCount', () => {
  it('should count odd numbers below `n`', () => {
    assert.strictEqual(oddCount(15), 7);
    assert.strictEqual(oddCount(15023), 7511);
  });
});
