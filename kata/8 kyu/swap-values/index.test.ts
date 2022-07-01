import { expect } from 'vitest';
import swapValues from '.';

describe('swapValues', () => {
  it('should swap values in array', () => {
    const arr = [1, 2];

    swapValues(arr);

    expect(arr).toStrictEqual([2, 1]);
  });
});
