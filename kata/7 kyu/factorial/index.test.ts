import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import factorial from './index.ts';

describe('factorial', () => {
  it('should return factorial', () => {
    assert.strictEqual(factorial(0), 1);
    assert.strictEqual(factorial(1), 1);
    assert.strictEqual(factorial(2), 2);
    assert.strictEqual(factorial(3), 6);
    assert.throws(() => factorial(-1), RangeError);
    assert.throws(() => factorial(13), RangeError);
  });
});
