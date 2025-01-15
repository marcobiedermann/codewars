import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import validParentheses from './index.ts';

describe('validParentheses', () => {
  it('should if order of the parentheses is valid', () => {
    assert.strictEqual(validParentheses('()'), true);
    assert.strictEqual(validParentheses('())'), false);
  });
});
