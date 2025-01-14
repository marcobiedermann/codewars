import { describe, expect, it } from 'vitest';
import foldArray from './index.ts';

describe('foldArray', () => {
  it('should fold array', () => {
    expect.assertions(4);

    expect(foldArray([1, 2, 3, 4, 5], 1)).toStrictEqual([6, 6, 3]);
    expect(foldArray([1, 2, 3, 4, 5], 2)).toStrictEqual([9, 6]);
    expect(foldArray([1, 2, 3, 4, 5], 3)).toStrictEqual([15]);
    expect(foldArray([-9, 9, -8, 8, 66, 23], 1)).toStrictEqual([14, 75, 0]);
  });
});
