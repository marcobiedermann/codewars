import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import numberToString from './index.ts';

describe('numberToString', () => {
  it('should convert number to string', () => {
    assert.strictEqual(numberToString(67), '67');
  });
});
