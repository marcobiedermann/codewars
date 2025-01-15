import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import nthFibo from './index.ts';

describe('nthFibo', () => {
  it('should return the nth Fibonacci number', () => {
    assert.strictEqual(nthFibo(1), 0);
    assert.strictEqual(nthFibo(2), 1);
    assert.strictEqual(nthFibo(3), 1);
    assert.strictEqual(nthFibo(4), 2);
  });
});
