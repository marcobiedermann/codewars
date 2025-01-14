import { describe, expect, it } from 'vitest';
import stray from './index.ts';

describe('stray', () => {
  it('should find single different number', () => {
    expect.assertions(2);

    expect(stray([1, 1, 2])).toBe(2);
    expect(stray([17, 17, 3, 17, 17, 17, 17])).toBe(3);
  });
});
