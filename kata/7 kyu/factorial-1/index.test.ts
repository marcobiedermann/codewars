import { describe, expect, it } from 'vitest';
import factorial from './index.ts';

describe('factorial', () => {
  it('should calculate factorial of number', () => {
    expect.assertions(5);

    expect(factorial(0)).toBe(1);
    expect(factorial(1)).toBe(1);
    expect(factorial(4)).toBe(24);
    expect(factorial(7)).toBe(5040);
    expect(factorial(17)).toBe(355687428096000);
  });
});
