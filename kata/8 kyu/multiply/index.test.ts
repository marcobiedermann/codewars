import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import multiply from './index.ts';

describe('multiply', () => {
  it('should multiply two numbers', () => {
    assert.strictEqual(multiply(1, 1), 1);
    assert.strictEqual(multiply(2, 1), 2);
    assert.strictEqual(multiply(2, 2), 4);
    assert.strictEqual(multiply(3, 5), 15);
  });
});
