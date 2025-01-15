import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import simpleMultiplication from './index.ts';

describe('simpleMultiplication', () => {
  it('should multiply value by 8 if even otherwise by 9', () => {
    assert.strictEqual(simpleMultiplication(2), 16);
    assert.strictEqual(simpleMultiplication(1), 9);
    assert.strictEqual(simpleMultiplication(8), 64);
    assert.strictEqual(simpleMultiplication(4), 32);
    assert.strictEqual(simpleMultiplication(5), 45);
  });
});
