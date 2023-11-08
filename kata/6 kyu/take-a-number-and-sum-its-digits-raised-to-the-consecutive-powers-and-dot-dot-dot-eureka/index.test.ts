import { describe, expect, it } from 'vitest';
import sumDigPow from '.';

describe('sumDigPow', () => {
  it('should return list of numbers which digits raised to their consecutive power is same as number', () => {
    expect.assertions(7);

    expect(sumDigPow(1, 10)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(sumDigPow(1, 100)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 89]);
    expect(sumDigPow(10, 100)).toStrictEqual([89]);
    expect(sumDigPow(90, 100)).toStrictEqual([]);
    expect(sumDigPow(90, 150)).toStrictEqual([135]);
    expect(sumDigPow(50, 150)).toStrictEqual([89, 135]);
    expect(sumDigPow(10, 150)).toStrictEqual([89, 135]);
  });
});
