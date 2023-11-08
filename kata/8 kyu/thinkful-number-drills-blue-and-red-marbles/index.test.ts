import { describe, expect, it } from 'vitest';
import guessBlue from '.';

describe('guessBlue', () => {
  it('should return the probability of drawing a blue marble', () => {
    expect.assertions(3);

    expect(guessBlue(5, 5, 2, 3)).toBe(0.6);
    expect(guessBlue(5, 7, 4, 3)).toBe(0.2);
    expect(guessBlue(12, 18, 4, 6)).toBe(0.4);
  });
});
