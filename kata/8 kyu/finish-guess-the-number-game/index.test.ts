import { describe, expect, it } from 'vitest';
import Guesser from '.';

describe('guesser', () => {
  it('correct guess should return true', () => {
    expect.assertions(1);

    const guesser = new Guesser(10, 2);

    guesser.guess(10);
    guesser.guess(10);
    guesser.guess(10);
    guesser.guess(10);

    expect(guesser.guess(10)).toBe(true);
  });

  it('wrong guess should return false', () => {
    expect.assertions(1);

    const guesser = new Guesser(10, 2);

    guesser.guess(1);

    expect(guesser.guess(1)).toBe(false);
  });

  it('lives ran out should throw', () => {
    expect.assertions(1);

    const guesser = new Guesser(10, 2);

    guesser.guess(1);
    guesser.guess(2);

    expect(() => {
      guesser.guess(10);
    }).toThrow('already dead');
  });
});
