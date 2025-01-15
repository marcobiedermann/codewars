import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import isDivideBy from './index.ts';

describe('isDivideBy', () => {
  it('should check if number is divisible by arguments', () => {
    assert.strictEqual(isDivideBy(-12, 2, -6), true);
    assert.strictEqual(isDivideBy(-12, 2, -5), false);
    assert.strictEqual(isDivideBy(45, 1, 6), false);
    assert.strictEqual(isDivideBy(45, 5, 15), true);
    assert.strictEqual(isDivideBy(4, 1, 4), true);
    assert.strictEqual(isDivideBy(15, -5, 3), true);
  });
});
