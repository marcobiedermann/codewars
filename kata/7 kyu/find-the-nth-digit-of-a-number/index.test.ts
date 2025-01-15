import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import findDigit from './index.ts';

describe('findDigit', () => {
  it('should find the nth digit of a number', () => {
    assert.strictEqual(findDigit(5673, 4), 5);
    assert.strictEqual(findDigit(129, 2), 2);
    assert.strictEqual(findDigit(-2825, 3), 8);
    assert.strictEqual(findDigit(-456, 4), 0);
    assert.strictEqual(findDigit(0, 20), 0);
    assert.strictEqual(findDigit(65, 0), -1);
    assert.strictEqual(findDigit(24, -8), -1);
  });
});
