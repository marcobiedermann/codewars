import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import formatMoney from './index.ts';

describe('formatMoney', () => {
  it('should form the amount formatting in dollars and cents', () => {
    assert.strictEqual(formatMoney(39.99), '$39.99');
  });
});
