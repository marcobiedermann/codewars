import { describe, expect, it } from 'vitest';
import maxNumber from '.';

describe('maxNumber', () => {
  it('should return maximum number from digitis of number', () => {
    expect.assertions(5);

    expect(maxNumber(213)).toBe(321);
    expect(maxNumber(7389)).toBe(9873);
    expect(maxNumber(63792)).toBe(97632);
    expect(maxNumber(566797)).toBe(977665);
    expect(maxNumber(1000000)).toBe(1000000);
  });
});
