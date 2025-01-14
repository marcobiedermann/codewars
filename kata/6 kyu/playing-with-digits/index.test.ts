import { describe, expect, it } from 'vitest';
import digPow from './index.ts';

describe('digPow', () => {
  it('should return a positive integer if exists such as the sum of the digits is equal to `k` * `n`', () => {
    expect.assertions(3);

    expect(digPow(89, 1)).toBe(1);
    expect(digPow(92, 1)).toBe(-1);
    expect(digPow(46288, 3)).toBe(51);
  });
});
