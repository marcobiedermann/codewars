import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import getScore from './index.ts';

describe('getScore', () => {
  it('should return the score for any positive number', () => {
    assert.strictEqual(getScore(1), 50);
    assert.strictEqual(getScore(2), 150);
    assert.strictEqual(getScore(3), 300);
    assert.strictEqual(getScore(4), 500);
    assert.strictEqual(getScore(5), 750);
  });
});
