import { describe, expect, it } from 'vitest';
import isDivideBy from './index.ts';

describe('isDivideBy', () => {
  it('should check if number is divisible by arguments', () => {
    expect.assertions(6);

    expect(isDivideBy(-12, 2, -6)).toBe(true);
    expect(isDivideBy(-12, 2, -5)).toBe(false);
    expect(isDivideBy(45, 1, 6)).toBe(false);
    expect(isDivideBy(45, 5, 15)).toBe(true);
    expect(isDivideBy(4, 1, 4)).toBe(true);
    expect(isDivideBy(15, -5, 3)).toBe(true);
  });
});
