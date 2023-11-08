import { describe, expect, it } from 'vitest';
import sumTriangularNumbers from '.';

describe('sumTriangularNumbers', () => {
  it('should calculate sum of triangular numbers', () => {
    expect.assertions(5);

    expect(sumTriangularNumbers(6)).toBe(56);
    expect(sumTriangularNumbers(34)).toBe(7140);
    expect(sumTriangularNumbers(-291)).toBe(0);
    expect(sumTriangularNumbers(943)).toBe(140205240);
    expect(sumTriangularNumbers(-971)).toBe(0);
  });
});
