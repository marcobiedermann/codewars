import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import guessBlue from './index.ts';

describe('guessBlue', () => {
  it('should return the probability of drawing a blue marble', () => {
    assert.strictEqual(guessBlue(5, 5, 2, 3), 0.6);
    assert.strictEqual(guessBlue(5, 7, 4, 3), 0.2);
    assert.strictEqual(guessBlue(12, 18, 4, 6), 0.4);
  });
});
