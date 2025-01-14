import { describe, expect, it } from 'vitest';
import getEvenNumbers from './index.ts';

describe('getEvenNumbers', () => {
  it('should filter even numbers', () => {
    expect.assertions(5);

    expect(getEvenNumbers([1, 2, 3, 6, 8, 10])).toStrictEqual([2, 6, 8, 10]);
    expect(getEvenNumbers([1, 2])).toStrictEqual([2]);
    expect(getEvenNumbers([12, 14, 15])).toStrictEqual([12, 14]);
    expect(getEvenNumbers([13, 15])).toStrictEqual([]);
    expect(getEvenNumbers([1, 3, 9])).toStrictEqual([]);
  });
});
