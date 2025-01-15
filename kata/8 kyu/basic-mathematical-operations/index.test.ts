import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import basicOp from './index.ts';

describe('basicOp', () => {
  it('should perform basic operations', () => {
    assert.strictEqual(basicOp('+', 4, 7), 11);
    assert.strictEqual(basicOp('-', 15, 18), -3);
    assert.strictEqual(basicOp('*', 5, 5), 25);
    assert.strictEqual(basicOp('/', 49, 7), 7);
  });
});
