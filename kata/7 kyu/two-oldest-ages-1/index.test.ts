import { describe, expect, it } from 'vitest';
import twoOldestAges from '.';

describe('twoOldestAges', () => {
  it('should return two oldest ages', () => {
    expect.assertions(1);

    expect(twoOldestAges([1, 2, 10, 8])).toStrictEqual([8, 10]);
  });
});
