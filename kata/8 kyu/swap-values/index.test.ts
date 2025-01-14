import { describe, expect, it } from 'vitest';
import swapValues from './index.ts';

describe('swapValues', () => {
  it('should swap values in array', () => {
    expect.assertions(1);

    const arr = [1, 2];

    swapValues(arr);

    expect(arr).toStrictEqual([2, 1]);
  });
});
