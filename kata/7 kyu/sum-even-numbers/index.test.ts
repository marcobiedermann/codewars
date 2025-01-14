import { describe, expect, it } from 'vitest';
import sumEvenNumbers from './index.ts';

describe('sumEvenNumbers', () => {
  it('should return the sum of the even values', () => {
    expect.assertions(1);

    expect(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(30);
  });
});
