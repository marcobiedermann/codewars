import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import enough from './index.ts';

describe('enough', () => {
  it('should return number of non fitting passengers', () => {
    assert.strictEqual(enough(10, 5, 5), 0);
    assert.strictEqual(enough(100, 60, 50), 10);
    assert.strictEqual(enough(20, 5, 5), 0);
  });
});
