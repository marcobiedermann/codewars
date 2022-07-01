/* eslint-disable camelcase */

import { expect } from 'vitest';
import array_diff from '.';

describe('array_diff', () => {
  it('should remove all values from list `a` which are present in list `b`', () => {
    expect(array_diff([], [4, 5])).toStrictEqual([]);
    expect(array_diff([3, 4], [3])).toStrictEqual([4]);
    expect(array_diff([1, 8, 2], [])).toStrictEqual([1, 8, 2]);
  });
});
