import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { add, divide, exponent, mod, multiply, subt } from './index.ts';

describe('calculate', () => {
  it('should calculate result', () => {
    assert.strictEqual(add(1, 2), 3);
    assert.strictEqual(multiply(1, 2), 2);
    assert.strictEqual(divide(2, 1), 2);
    assert.strictEqual(mod(1, 2), 1);
    assert.strictEqual(exponent(1, 2), 1);
    assert.strictEqual(subt(1, 2), -1);
  });
});
