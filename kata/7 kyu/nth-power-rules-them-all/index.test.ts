import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import modifiedSum from './index.ts';

describe('modifiedSum', () => {
  it('should return modified sum', () => {
    assert.strictEqual(modifiedSum([1, 2, 3], 3), 30);
    assert.strictEqual(modifiedSum([1, 2], 5), 30);
  });
});
