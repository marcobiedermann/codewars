import { describe, expect, it } from 'vitest';
import divisibleBy from './index.ts';

describe('divisibleBy', () => {
  it('should return numbers which are divisible by divisor', () => {
    expect.assertions(5);

    expect(divisibleBy([1, 2, 3, 4, 5, 6], 2)).toStrictEqual([2, 4, 6]);
    expect(divisibleBy([1, 2, 3, 4, 5, 6], 3)).toStrictEqual([3, 6]);
    expect(divisibleBy([0, 1, 2, 3, 4, 5, 6], 4)).toStrictEqual([0, 4]);
    expect(divisibleBy([0], 4)).toStrictEqual([0]);
    expect(divisibleBy([1, 3, 5], 2)).toStrictEqual([]);
  });
});
