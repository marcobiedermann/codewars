import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import factorial from './index.ts';

describe('factorial', () => {
  it('should calculate factorial of number', () => {
    assert.strictEqual(factorial(0), 1);
    assert.strictEqual(factorial(1), 1);
    assert.strictEqual(factorial(4), 24);
    assert.strictEqual(factorial(7), 5040);
    assert.strictEqual(factorial(17), 355687428096000);
  });
});
