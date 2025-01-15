import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import groupByCommas from './index.ts';

describe('groupByCommas', () => {
  it('should', () => {
    assert.strictEqual(groupByCommas(1), '1');
    assert.strictEqual(groupByCommas(10), '10');
    assert.strictEqual(groupByCommas(100), '100');
    assert.strictEqual(groupByCommas(1000), '1,000');
    assert.strictEqual(groupByCommas(10000), '10,000');
    assert.strictEqual(groupByCommas(100000), '100,000');
    assert.strictEqual(groupByCommas(1000000), '1,000,000');
    assert.strictEqual(groupByCommas(35235235), '35,235,235');
  });
});
