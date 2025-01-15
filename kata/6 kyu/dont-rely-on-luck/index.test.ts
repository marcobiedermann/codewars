import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import guess from './index.ts';

describe('guess', () => {
  it('should', () => {
    const luckyNumber = Math.floor(Math.random() * 100 + 1);

    assert.strictEqual(guess, luckyNumber);
  });
});
