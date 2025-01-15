import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import sumStr from './index.ts';

describe('sumStr', () => {
  it('should add two numbers in form of a string', () => {
    assert.strictEqual(sumStr('4', '5'), '9');
    assert.strictEqual(sumStr('34', '5'), '39');
  });
});
