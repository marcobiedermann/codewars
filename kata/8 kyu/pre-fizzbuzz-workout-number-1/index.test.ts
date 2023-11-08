import { describe, expect, it } from 'vitest';
import preFizz from '.';

describe('preFizz', () => {
  it('should return an array of positive integers from 1 to `n`', () => {
    expect.assertions(5);

    expect(preFizz(1)).toStrictEqual([1]);
    expect(preFizz(2)).toStrictEqual([1, 2]);
    expect(preFizz(3)).toStrictEqual([1, 2, 3]);
    expect(preFizz(4)).toStrictEqual([1, 2, 3, 4]);
    expect(preFizz(5)).toStrictEqual([1, 2, 3, 4, 5]);
  });
});
