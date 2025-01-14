import { describe, expect, it } from 'vitest';
import reverseNumber from './index.ts';

describe('reverseNumber', () => {
  it('should reverse its digits', () => {
    expect.assertions(7);

    expect(reverseNumber(123)).toBe(321);
    expect(reverseNumber(-123)).toBe(-321);
    expect(reverseNumber(1000)).toBe(1);
    expect(reverseNumber(4321234)).toBe(4321234);
    expect(reverseNumber(5)).toBe(5);
    expect(reverseNumber(0)).toBe(0);
    expect(reverseNumber(98989898)).toBe(89898989);
  });
});
