import { describe, expect, it } from 'vitest';
import partsSums from './index.ts';

describe('partsSums', () => {
  it('return list of the sums of its parts', () => {
    expect.assertions(4);

    expect(partsSums([])).toStrictEqual([0]);
    expect(partsSums([0, 1, 3, 6, 10])).toStrictEqual([20, 20, 19, 16, 10, 0]);
    expect(partsSums([1, 2, 3, 4, 5, 6])).toStrictEqual([21, 20, 18, 15, 11, 6, 0]);
    expect(
      partsSums([744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]),
    ).toStrictEqual([
      10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057, 2580168,
      2579358, 0,
    ]);
  });
});
