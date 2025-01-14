import { describe, expect, it } from 'vitest';
import pipeFix from './index.ts';

describe('pipeFix', () => {
  it('should return each number in range', () => {
    expect.assertions(5);

    expect(pipeFix([1, 2, 3, 5, 6, 8, 9])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(pipeFix([1, 2, 3, 12])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    expect(pipeFix([6, 9])).toStrictEqual([6, 7, 8, 9]);
    expect(pipeFix([-1, 4])).toStrictEqual([-1, 0, 1, 2, 3, 4]);
    expect(pipeFix([1, 2, 3])).toStrictEqual([1, 2, 3]);
  });
});
