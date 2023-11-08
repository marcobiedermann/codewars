import { describe, expect, it } from 'vitest';
import findDigit from '.';

describe('findDigit', () => {
  it('should find the nth digit of a number', () => {
    expect.assertions(7);

    expect(findDigit(5673, 4)).toBe(5);
    expect(findDigit(129, 2)).toBe(2);
    expect(findDigit(-2825, 3)).toBe(8);
    expect(findDigit(-456, 4)).toBe(0);
    expect(findDigit(0, 20)).toBe(0);
    expect(findDigit(65, 0)).toBe(-1);
    expect(findDigit(24, -8)).toBe(-1);
  });
});
