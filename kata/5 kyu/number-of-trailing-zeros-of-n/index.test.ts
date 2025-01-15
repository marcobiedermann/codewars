import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import zeros from './index.ts';

describe('zeros', () => {
  it('should count number of trailing zeros in a factorial of a given number', () => {
    assert.strictEqual(zeros(0), 0);
    assert.strictEqual(zeros(5), 1);
    assert.strictEqual(zeros(6), 1);
    assert.strictEqual(zeros(30), 7);
  });
});
