import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import validate from './index.ts';

describe('validate', () => {
  it('should validate credit card numbers', () => {
    assert.strictEqual(validate(123), false);
    assert.strictEqual(validate(1), false);
    assert.strictEqual(validate(2121), true);
    assert.strictEqual(validate(1230), true);
    assert.strictEqual(validate(8675309), false);
  });
});
