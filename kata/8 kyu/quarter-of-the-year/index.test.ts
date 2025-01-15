import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import quarterOf from './index.ts';

describe('quarterOf', () => {
  it('should return the quarter of month', () => {
    assert.strictEqual(quarterOf(3), 1);
    assert.strictEqual(quarterOf(8), 3);
    assert.strictEqual(quarterOf(11), 4);
  });
});
