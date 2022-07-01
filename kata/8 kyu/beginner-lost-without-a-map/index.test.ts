import { expect } from 'vitest';
import maps from '.';

describe('maps', () => {
  it('should double each value in array', () => {
    expect(maps([1, 2, 3])).toStrictEqual([2, 4, 6]);
    expect(maps([4, 1, 1, 1, 4])).toStrictEqual([8, 2, 2, 2, 8]);
    expect(maps([2, 2, 2, 2, 2, 2])).toStrictEqual([4, 4, 4, 4, 4, 4]);
  });
});
