import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import stringTransformer from './index.ts';

describe('stringTransformer', () => {
  it('should change lower to upper and reverse the order of words', () => {
    assert.strictEqual(stringTransformer('Example string'), 'STRING eXAMPLE');
  });
});
