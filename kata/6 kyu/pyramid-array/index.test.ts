import { describe, expect, it } from 'vitest';
import pyramid from '.';

describe('pyramid', () => {
  it('should return an array of ascending length subarrays', () => {
    expect.assertions(4);

    expect(pyramid(0)).toStrictEqual([]);
    expect(pyramid(1)).toStrictEqual([[1]]);
    expect(pyramid(2)).toStrictEqual([[1], [1, 1]]);
    expect(pyramid(3)).toStrictEqual([[1], [1, 1], [1, 1, 1]]);
  });
});
