import { describe, expect, it } from 'vitest';
import factorial from '.';

describe('factorial', () => {
  it('should calculate the factorial', () => {
    expect.assertions(2);

    expect(factorial(2)).toBe(2);
    expect(factorial(5)).toBe(120);
  });
});
