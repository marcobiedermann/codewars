import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import unluckyDays from './index.ts';

describe('unluckyDays', () => {
  it('should return the number of Friday 13th in the given year', () => {
    assert.strictEqual(unluckyDays(1586), 1);
    assert.strictEqual(unluckyDays(1001), 3);
    assert.strictEqual(unluckyDays(2819), 2);
    assert.strictEqual(unluckyDays(2792), 2);
    assert.strictEqual(unluckyDays(2723), 2);
    assert.strictEqual(unluckyDays(1909), 1);
    assert.strictEqual(unluckyDays(1812), 2);
    assert.strictEqual(unluckyDays(1618), 2);
    assert.strictEqual(unluckyDays(2132), 1);
    assert.strictEqual(unluckyDays(2065), 3);
  });
});
