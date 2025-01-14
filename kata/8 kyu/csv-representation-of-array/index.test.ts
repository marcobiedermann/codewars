import { describe, expect, it } from 'vitest';
import toCsvText from './index.ts';

describe('toCsvText', () => {
  it('should return the CSV representation of a two-dimensional array', () => {
    expect.assertions(3);

    expect(
      toCsvText([
        [0, 1, 2, 3, 45],
        [10, 11, 12, 13, 14],
        [20, 21, 22, 23, 24],
        [30, 31, 32, 33, 34],
      ]),
    ).toBe('0,1,2,3,45\n10,11,12,13,14\n20,21,22,23,24\n30,31,32,33,34');

    expect(
      toCsvText([
        [-25, 21, 2, -33, 48],
        [30, 31, -32, 33, -34],
      ]),
    ).toBe('-25,21,2,-33,48\n30,31,-32,33,-34');

    expect(
      toCsvText([
        [5, 55, 5, 5, 55],
        [6, 6, 66, 23, 24],
        [666, 31, 66, 33, 7],
      ]),
    ).toBe('5,55,5,5,55\n6,6,66,23,24\n666,31,66,33,7');
  });
});
