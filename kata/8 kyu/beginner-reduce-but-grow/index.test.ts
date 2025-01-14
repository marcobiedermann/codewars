import { describe, expect, it } from 'vitest';
import grow from './index.ts';

describe('grow', () => {
  it('should multiply all numbers in list', () => {
    expect.assertions(3);

    expect(grow([1, 2, 3])).toBe(6);
    expect(grow([4, 1, 1, 1, 4])).toBe(16);
    expect(grow([2, 2, 2, 2, 2, 2])).toBe(64);
  });
});
