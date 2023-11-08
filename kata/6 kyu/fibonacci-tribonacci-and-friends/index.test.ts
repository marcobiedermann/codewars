import { describe, expect, it } from 'vitest';
import Xbonacci from '.';

describe('xbonacci', () => {
  it('should return a xbonacci sequence', () => {
    expect.assertions(5);

    expect(Xbonacci([0, 1], 10)).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    expect(Xbonacci([1, 1], 10)).toStrictEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
    expect(Xbonacci([0, 0, 0, 0, 1], 10)).toStrictEqual([0, 0, 0, 0, 1, 1, 2, 4, 8, 16]);
    expect(Xbonacci([1, 0, 0, 0, 0, 0, 1], 10)).toStrictEqual([1, 0, 0, 0, 0, 0, 1, 2, 3, 6]);
    expect(Xbonacci([1, 0, 0, 0, 0, 0, 0, 0, 0, 0], 20)).toStrictEqual([
      1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 4, 8, 16, 32, 64, 128, 256,
    ]);
  });
});
