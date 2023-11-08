import { describe, expect, it } from 'vitest';
import quadratic from '.';

describe('quadratic', () => {
  it('should return the coefficients of quadratic equation', () => {
    expect.assertions(6);

    expect(quadratic(0, 1)).toStrictEqual([1, -1, 0]);
    expect(quadratic(1, 1)).toStrictEqual([1, -2, 1]);
    expect(quadratic(-4, -9)).toStrictEqual([1, 13, 36]);
    expect(quadratic(-5, -4)).toStrictEqual([1, 9, 20]);
    expect(quadratic(4, -9)).toStrictEqual([1, 5, -36]);
    expect(quadratic(5, -4)).toStrictEqual([1, -1, -20]);
  });
});
