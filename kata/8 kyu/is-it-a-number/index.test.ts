import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import isDigit from './index.ts';

describe('isDigit', () => {
  it('should check if input is number', () => {
    assert.strictEqual(isDigit('s2324'), false);
    assert.strictEqual(isDigit('-234.4'), true);
  });
});
