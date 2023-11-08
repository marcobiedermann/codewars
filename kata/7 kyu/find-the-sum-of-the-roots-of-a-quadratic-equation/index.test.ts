import { describe, expect, it } from 'vitest';
import roots from '.';

describe('roots', () => {
  it('should', () => {
    expect.assertions(45);

    expect(roots(1, -35, -23)).toBe(35);
    expect(roots(6, 0, -24)).toBe(0);
    expect(roots(-5, 21, 0)).toBe(4.2);
    expect(roots(6, 4, 8)).toBeNull();
    expect(roots(1, 5, -24)).toBe(-5);
    expect(roots(3, 11, 6)).toBe(-3.67);
    expect(roots(2, 2, 9)).toBeNull();
    expect(roots(1, -5 / 3.0, -26)).toBe(1.67);
    expect(roots(1, 6, 10)).toBeNull();
    expect(roots(7, -2, -5)).toBe(0.29);
    expect(roots(1, 8, 20)).toBeNull();
    expect(roots(2, 3, -2)).toBe(-1.5);
    expect(roots(1, 4, 12)).toBeNull();
    expect(roots(3, -2, -5)).toBe(0.67);
    expect(roots(3, 4, 9)).toBeNull();
    expect(roots(5, 4, 0)).toBe(-0.8);
    expect(roots(4, -5, 0)).toBe(1.25);
    expect(roots(1, 4, 9)).toBeNull();
    expect(roots(1, 0, -49)).toBe(0);
    expect(roots(2, 8, 8)).toBe(-4);
    expect(roots(1, 0, -0.16)).toBe(0);
    expect(roots(1, 6, 12)).toBeNull();
    expect(roots(1, 0, -9)).toBe(0);
    expect(roots(-3, 0, 12)).toBe(0);
    expect(roots(1, 3, 9)).toBeNull();
    expect(roots(3, 7, 0)).toBe(-2.33);
    expect(roots(5, 3, 6)).toBeNull();
    expect(roots(1, 4, 4)).toBe(-4);
    expect(roots(-1, 0, 5.29)).toBe(0);
    expect(roots(1, 12, 36)).toBe(-12);
    expect(roots(1, 0, -0.09)).toBe(0);
    expect(roots(2, 5, 11)).toBeNull();
    expect(roots(3, 0, -15)).toBe(0);
    expect(roots(1, -3, 0)).toBe(3);
    expect(roots(1, 8, 16)).toBe(-8);
    expect(roots(2, 6, 9)).toBeNull();
    expect(roots(-1, 36, 0)).toBe(36);
    expect(roots(5, -8, 0)).toBe(1.6);
    expect(roots(1, 5, 12)).toBeNull();
    expect(roots(-14, 0, 0)).toBe(0);
    expect(roots(1, 7, 20)).toBeNull();
    expect(roots(1, -6, 0)).toBe(6);
    expect(roots(1, -11, 30)).toBe(11);
    expect(roots(1, 3, 12)).toBeNull();
    expect(roots(1, 6, 9)).toBe(-6);
  });
});
