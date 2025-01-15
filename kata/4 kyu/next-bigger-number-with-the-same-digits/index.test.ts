import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import nextBigger from './index.ts';

describe('nextBigger', () => {
  it('should return next bigger number', () => {
    assert.strictEqual(nextBigger(12), 21);
    assert.strictEqual(nextBigger(513), 531);
    assert.strictEqual(nextBigger(2017), 2071);
    assert.strictEqual(nextBigger(414), 441);
    assert.strictEqual(nextBigger(144), 414);
    assert.strictEqual(nextBigger(9), -1);
    assert.strictEqual(nextBigger(111), -1);
    assert.strictEqual(nextBigger(531), -1);
  });
});
