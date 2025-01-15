import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import makeNegative from './index.ts';

describe('makeNegative', () => {
  it('should make the number negative', () => {
    assert.strictEqual(makeNegative(42), -42);
    assert.strictEqual(makeNegative(-5), -5);
    assert.strictEqual(makeNegative(0), 0);
    assert.strictEqual(makeNegative(0.12), -0.12);
  });
});
