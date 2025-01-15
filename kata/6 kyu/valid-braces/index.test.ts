import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import validBraces from './index.ts';

describe('validBraces', () => {
  it('should validate braces', () => {
    assert.strictEqual(validBraces('()'), true);
    assert.strictEqual(validBraces('[(])'), false);
  });
});
