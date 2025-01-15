import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import calculator from './index.ts';

describe('calculator', () => {
  it('should calculate result', () => {
    assert.strictEqual(calculator(1, 2, '+'), 3);
    assert.strictEqual(calculator(1, 2, '-'), -1);
    assert.strictEqual(calculator(3, 5, '*'), 15);
    assert.strictEqual(calculator(6, 2, '/'), 3);
    assert.strictEqual(calculator(6, 2, '$'), 'unknown value');
    assert.strictEqual(calculator(6, 'h', '*'), 'unknown value');
  });
});
