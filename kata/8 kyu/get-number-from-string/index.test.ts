import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import getNumberFromString from './index.ts';

describe('getNumberFromString', () => {
  it('should get all numbers from string', () => {
    assert.strictEqual(getNumberFromString('1'), 1);
    assert.strictEqual(getNumberFromString('123'), 123);
    assert.strictEqual(getNumberFromString('this is number: 7'), 7);
  });
});
