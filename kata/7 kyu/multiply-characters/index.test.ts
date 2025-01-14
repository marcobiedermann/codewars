import { describe, expect, it } from 'vitest';
import spam from './index.ts';

describe('spam', () => {
  it('should repeat the word `n` times', () => {
    expect.assertions(3);

    expect(spam(1)).toBe('hue');
    expect(spam(6)).toBe('huehuehuehuehuehue');
    expect(spam(14)).toBe('huehuehuehuehuehuehuehuehuehuehuehuehuehue');
  });
});
