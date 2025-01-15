import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import isLeapYear from './index.ts';

describe('isLeapYear', () => {
  it('should check whether year is a leap year', () => {
    assert.strictEqual(isLeapYear(1000), false);
    assert.strictEqual(isLeapYear(1234), false);
    assert.strictEqual(isLeapYear(1984), true);
    assert.strictEqual(isLeapYear(2000), true);
    assert.strictEqual(isLeapYear(2010), false);
    assert.strictEqual(isLeapYear(2013), false);
  });
});
