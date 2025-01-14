import { describe, expect, it } from 'vitest';
import multiples from './index.ts';

describe('multiples', () => {
  it('should return an array of the first `m` multiples of `n`', () => {
    expect.assertions(1);

    expect(multiples(3, 5)).toStrictEqual([5, 10, 15]);
  });
});
