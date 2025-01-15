import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import factorial from './index.ts';

describe('factorial', () => {
  it('should calculate the factorial', () => {
    assert.strictEqual(factorial(2), 2);
    assert.strictEqual(factorial(5), 120);
  });
});
