import { describe, expect, it } from 'vitest';
import minimum from '.';

describe('minimum', () => {
  it('should return minimum number to add / subtract to make multiple', () => {
    expect.assertions(12);

    expect(minimum(1, 1)).toBe(0);
    expect(minimum(9, 4)).toBe(1);
    expect(minimum(10, 6)).toBe(2);
    expect(minimum(60, 45)).toBe(15);
    expect(minimum(57, 50)).toBe(7);
    expect(minimum(28, 16)).toBe(4);
    expect(minimum(84, 80)).toBe(4);
    expect(minimum(129, 49)).toBe(18);
    expect(minimum(150, 67)).toBe(16);
    expect(minimum(121, 46)).toBe(17);
    expect(minimum(83, 81)).toBe(2);
    expect(minimum(89, 74)).toBe(15);
  });
});
