import { expect } from 'vitest';
import take from '.';

describe('take', () => {
  it('should take `n` elements from array', () => {
    expect(take([0, 1, 2, 3, 5, 8, 13], 3)).toStrictEqual([0, 1, 2]);
  });
});
