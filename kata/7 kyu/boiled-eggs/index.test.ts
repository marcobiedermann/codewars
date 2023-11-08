import { describe, expect, it } from 'vitest';
import cookingTime from '.';

describe('cookingTime', () => {
  it('should calculate the cooking time', () => {
    expect.assertions(3);

    expect(cookingTime(0)).toBe(0);
    expect(cookingTime(5)).toBe(5);
    expect(cookingTime(10)).toBe(10);
  });
});
