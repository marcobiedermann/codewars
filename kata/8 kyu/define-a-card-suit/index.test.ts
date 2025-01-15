import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import defineSuit from './index.ts';

describe('defineSuit', () => {
  it('should return the suit of the card', () => {
    assert.strictEqual(defineSuit('3♣'), 'clubs');
    assert.strictEqual(defineSuit('Q♠'), 'spades');
    assert.strictEqual(defineSuit('9♦'), 'diamonds');
    assert.strictEqual(defineSuit('J♥'), 'hearts');
  });
});
