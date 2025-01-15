import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import even_or_odd from './index.ts';

describe('even_or_odd', () => {
  it('should return `Even` for even numbers and `Odd` for odd numbers', () => {
    assert.strictEqual(even_or_odd(2), 'Even');
    assert.strictEqual(even_or_odd(7), 'Odd');
    assert.strictEqual(even_or_odd(-42), 'Even');
    assert.strictEqual(even_or_odd(-7), 'Odd');
    assert.strictEqual(even_or_odd(0), 'Even');
  });
});
