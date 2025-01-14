import { describe, expect, it } from 'vitest';
import sum from './index.ts';

describe('sum', () => {
  it('should', () => {
    expect.assertions(5);

    expect(sum(1)).toBe(1);
    expect(sum(1, 2)).toBe(3);
    expect(sum(5, 7, 9)).toBe(21);
    expect(sum(12, 1, 1, 1, 1)).toBe(16);
    expect(sum(12, 1, 1, 1, 1, 1, 1)).toBe(18);
  });
});
