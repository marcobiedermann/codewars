import { describe, expect, it } from 'vitest';
import sqInRect from './index.ts';

describe('sqInRect', () => {
  it('should return number of squares in rect', () => {
    expect.assertions(4);

    expect(sqInRect(5, 5)).toBeNull();
    expect(sqInRect(5, 3)).toStrictEqual([3, 2, 1, 1]);
    expect(sqInRect(3, 5)).toStrictEqual([3, 2, 1, 1]);
    expect(sqInRect(20, 14)).toStrictEqual([14, 6, 6, 2, 2, 2]);
  });
});
