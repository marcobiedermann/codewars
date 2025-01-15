import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import alternateCase from './index.ts';

describe('alternateCase', () => {
  it('should switch every letter from upper to lower and from lower to upper', () => {
    assert.strictEqual(alternateCase('abc'), 'ABC');
    assert.strictEqual(alternateCase('ABC'), 'abc');
    assert.strictEqual(alternateCase('Hello World'), 'hELLO wORLD');
  });
});
