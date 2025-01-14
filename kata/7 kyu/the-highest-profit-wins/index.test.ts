import { describe, expect, it } from 'vitest';
import minMax from './index.ts';

describe('minMax', () => {
  it('should return the minimum and maximum number of array', () => {
    expect.assertions(2);

    expect(minMax([1, 2, 3, 4, 5])).toStrictEqual([1, 5]);
    expect(minMax([2334454, 5])).toStrictEqual([5, 2334454]);
  });
});
