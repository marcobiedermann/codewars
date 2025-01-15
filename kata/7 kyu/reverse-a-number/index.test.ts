import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import reverseNumber from './index.ts';

describe('reverseNumber', () => {
  it('should reverse its digits', () => {
    assert.strictEqual(reverseNumber(123), 321);
    assert.strictEqual(reverseNumber(-123), -321);
    assert.strictEqual(reverseNumber(1000), 1);
    assert.strictEqual(reverseNumber(4321234), 4321234);
    assert.strictEqual(reverseNumber(5), 5);
    assert.strictEqual(reverseNumber(0), 0);
    assert.strictEqual(reverseNumber(98989898), 89898989);
  });
});
