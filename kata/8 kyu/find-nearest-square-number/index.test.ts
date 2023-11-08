import { describe, expect, it } from 'vitest';
import nearestSq from '.';

describe('nearestSq', () => {
  it('should find nearest square number', () => {
    expect.assertions(5);

    expect(nearestSq(1)).toBe(1);
    expect(nearestSq(2)).toBe(1);
    expect(nearestSq(10)).toBe(9);
    expect(nearestSq(111)).toBe(121);
    expect(nearestSq(9999)).toBe(10000);
  });
});
