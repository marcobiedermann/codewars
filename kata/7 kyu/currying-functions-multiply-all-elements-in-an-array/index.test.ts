import { describe, expect, it } from 'vitest';
import multiplyAll from './index.ts';

describe('multiplyAll', () => {
  it('should multiply each element in array with integer', () => {
    expect.assertions(6);

    expect(Array.isArray(multiplyAll([1])(1))).toBe(true);
    expect(multiplyAll([1, 2])(1)).toHaveLength(2);
    expect(multiplyAll([1, 2, 3])(1)).toStrictEqual([1, 2, 3]);
    expect(multiplyAll([1, 2, 3])(2)).toStrictEqual([2, 4, 6]);
    expect(multiplyAll([1, 2, 3])(0)).toStrictEqual([0, 0, 0]);
    expect(multiplyAll([])(10)).toStrictEqual([]);
  });
});
