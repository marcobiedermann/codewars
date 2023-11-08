import { describe, expect, it } from 'vitest';
import solve from '.';

describe('solve', () => {
  it('should remove left-most duplicates from list', () => {
    expect.assertions(5);

    expect(solve([3, 4, 4, 3, 6, 3])).toStrictEqual([4, 6, 3]);
    expect(solve([1, 2, 1, 2, 1, 2, 3])).toStrictEqual([1, 2, 3]);
    expect(solve([1, 2, 3, 4])).toStrictEqual([1, 2, 3, 4]);
    expect(solve([1, 1, 4, 5, 1, 2, 1])).toStrictEqual([4, 5, 2, 1]);
    expect(solve([1, 2, 1, 2, 1, 1, 3])).toStrictEqual([2, 1, 3]);
  });
});
