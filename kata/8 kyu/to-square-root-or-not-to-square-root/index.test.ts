import { describe, expect, it } from 'vitest';
import squareOrSquareRoot from './index.ts';

describe('squareOrSquareRoot', () => {
  it('should return array of numbers, if the number has an integer square root, take this, otherwise square the number', () => {
    expect.assertions(3);

    expect(squareOrSquareRoot([4, 3, 9, 7, 2, 1])).toStrictEqual([2, 9, 3, 49, 4, 1]);
    expect(squareOrSquareRoot([100, 101, 5, 5, 1, 1])).toStrictEqual([10, 10201, 25, 25, 1, 1]);
    expect(squareOrSquareRoot([1, 2, 3, 4, 5, 6])).toStrictEqual([1, 4, 9, 2, 25, 36]);
  });
});
