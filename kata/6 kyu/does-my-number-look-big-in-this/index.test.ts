import { describe, expect, it } from 'vitest';
import narcissistic from './index.ts';

describe('narcissistic', () => {
  it('should find small numbers are all narcissistic', () => {
    expect.assertions(1);

    expect(narcissistic(7)).toBe(true);
  });

  it('should find these numbers are narcissistic', () => {
    expect.assertions(1);

    expect(narcissistic(371)).toBe(true);
  });
});
