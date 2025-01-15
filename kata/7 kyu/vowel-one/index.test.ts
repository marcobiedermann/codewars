import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import vowelOne from './index.ts';

describe('vowelOne', () => {
  it('should replace vowels with `1` and non-vowels with `0`', () => {
    assert.strictEqual(vowelOne('vowelOne'), '01010101');
    assert.strictEqual(vowelOne('123, arou'), '000001011');
  });
});
