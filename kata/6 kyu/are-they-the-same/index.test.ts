import { expect } from 'vitest';
import comp from '.';

describe('comp', () => {
  it('should check if both array are the same with the same multiplicities', () => {
    expect(
      comp(
        [121, 144, 19, 161, 19, 144, 19, 11],
        [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19],
      ),
    ).toBe(true);
    expect(comp(null, [1])).toBe(false);
    expect(comp([1], null)).toBe(false);
  });
});
