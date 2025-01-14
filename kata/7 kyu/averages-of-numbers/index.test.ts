import { describe, expect, it } from 'vitest';
import averages from './index.ts';

describe('averages', () => {
  it('should return average for each number and his follower', () => {
    expect.assertions(3);

    expect(averages([2, 2, 2, 2, 2])).toStrictEqual([2, 2, 2, 2]);
    expect(averages([2, -2, 2, -2, 2])).toStrictEqual([0, 0, 0, 0]);
    expect(averages([1, 3, 5, 1, -10])).toStrictEqual([2, 4, 3, -4.5]);
  });
});
