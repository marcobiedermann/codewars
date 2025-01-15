import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import multiply from './index.ts';

describe('multiply', () => {
  it('should multiply two numbers', () => {
    assert.strictEqual(multiply(1, 2), 2);
  });
});
