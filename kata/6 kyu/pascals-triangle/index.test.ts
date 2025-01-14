import { describe, expect, it } from 'vitest';
import pascalsTriangle from './index.ts';

describe('pascalsTriangle', () => {
  it('should return pascals triangle flattened into a list', () => {
    expect.assertions(4);

    expect(pascalsTriangle(1)).toStrictEqual([1]);
    expect(pascalsTriangle(2)).toStrictEqual([1, 1, 1]);
    expect(pascalsTriangle(4)).toStrictEqual([1, 1, 1, 1, 2, 1, 1, 3, 3, 1]);
    expect(pascalsTriangle(6)).toStrictEqual([
      1, 1, 1, 1, 2, 1, 1, 3, 3, 1, 1, 4, 6, 4, 1, 1, 5, 10, 10, 5, 1,
    ]);
  });
});
