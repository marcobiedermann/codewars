import { describe, expect, it } from 'vitest';
import mergeArrays from '.';

describe('mergeArrays', () => {
  it('should merge two arrays into one', () => {
    expect.assertions(3);

    expect(mergeArrays([1, 2, 3, 4], [5, 6, 7, 8])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    expect(mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2])).toStrictEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ]);
    expect(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12])).toStrictEqual([
      1, 2, 3, 4, 5, 7, 9, 10, 11, 12,
    ]);
  });
});
