import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import evalObject from './index.ts';

describe('evalObject', () => {
  it('should calculate the result', () => {
    assert.strictEqual(evalObject({ a: 1, b: 1, operation: '+' }), 2);
    assert.strictEqual(evalObject({ a: 1, b: 1, operation: '-' }), 0);
    assert.strictEqual(evalObject({ a: 1, b: 1, operation: '/' }), 1);
    assert.strictEqual(evalObject({ a: 1, b: 1, operation: '*' }), 1);
    assert.strictEqual(evalObject({ a: 1, b: 1, operation: '%' }), 0);
    assert.strictEqual(evalObject({ a: 1, b: 1, operation: '^' }), 1);
    assert.throws(
      () => evalObject({ a: 1, b: 1, operation: '.' }),
      new Error('Unsupported Operator'),
    );
  });
});
