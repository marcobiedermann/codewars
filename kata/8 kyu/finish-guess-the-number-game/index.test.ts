import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import Guesser from './index.ts';

describe('guesser', () => {
  it('correct guess should return true', () => {
    const guesser = new Guesser(10, 2);

    guesser.guess(10);
    guesser.guess(10);
    guesser.guess(10);
    guesser.guess(10);

    assert.strictEqual(guesser.guess(10), true);
  });

  it('wrong guess should return false', () => {
    const guesser = new Guesser(10, 2);

    guesser.guess(1);

    assert.strictEqual(guesser.guess(1), false);
  });

  it('lives ran out should throw', () => {
    const guesser = new Guesser(10, 2);

    guesser.guess(1);
    guesser.guess(2);

    assert.throws(() => {
      guesser.guess(10);
    }, new Error('already dead'));
  });
});
