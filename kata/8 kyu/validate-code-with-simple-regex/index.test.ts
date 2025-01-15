import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import validateCode from './index.ts';

describe('validateCode', () => {
  it('should check if the code begins with `1`, `2` or `3`', () => {
    assert.strictEqual(validateCode(123), true);
    assert.strictEqual(validateCode(248), true);
    assert.strictEqual(validateCode(8), false);
    assert.strictEqual(validateCode(321), true);
    assert.strictEqual(validateCode(9453), false);
  });
});
