import { describe, expect, it } from 'vitest';
import sumOfN from './index.ts';

describe('sumOfN', () => {
  it('should', () => {
    expect.assertions(4);

    expect(sumOfN(3)).toStrictEqual([0, 1, 3, 6]);
    expect(sumOfN(-4)).toStrictEqual([0, -1, -3, -6, -10]);
    expect(sumOfN(1)).toStrictEqual([0, 1]);
    expect(sumOfN(-6)).toStrictEqual([0, -1, -3, -6, -10, -15, -21]);
  });
});
