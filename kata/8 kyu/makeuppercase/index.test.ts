import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import makeUpperCase from './index.ts';

describe('makeUpperCase', () => {
  it('should transform string to uppercase', () => {
    assert.strictEqual(makeUpperCase('hello'), 'HELLO');
  });
});
