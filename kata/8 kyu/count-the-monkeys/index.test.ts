import { describe, expect, it } from 'vitest';
import monkeyCount from './index.ts';

describe('monkeyCount', () => {
  it('should return an array with all numbers up to that number', () => {
    expect.assertions(5);

    expect(monkeyCount(5)).toStrictEqual([1, 2, 3, 4, 5]);
    expect(monkeyCount(3)).toStrictEqual([1, 2, 3]);
    expect(monkeyCount(9)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(monkeyCount(10)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(monkeyCount(20)).toStrictEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ]);
  });
});
