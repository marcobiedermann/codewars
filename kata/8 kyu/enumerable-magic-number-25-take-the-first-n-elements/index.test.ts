import { describe, expect, it } from 'vitest';
import take from './index.ts';

describe('take', () => {
  it('should take `n` elements from array', () => {
    expect.assertions(1);

    expect(take([0, 1, 2, 3, 5, 8, 13], 3)).toStrictEqual([0, 1, 2]);
  });
});
