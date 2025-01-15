import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import testEven from './index.ts';

describe('testEven', () => {
  it('should check if number is even', () => {
    assert.strictEqual(testEven(0), true);
    assert.strictEqual(testEven(0.5), false);
    assert.strictEqual(testEven(1), false);
    assert.strictEqual(testEven(2), true);
    assert.strictEqual(testEven(-4), true);
  });
});
