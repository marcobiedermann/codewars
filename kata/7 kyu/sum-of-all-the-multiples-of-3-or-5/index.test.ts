import { describe, expect, it } from 'vitest';
import findSum from './index.ts';

describe('findSum', () => {
  it('should sum all products of `3` or `5`', () => {
    expect.assertions(2);

    expect(findSum(5)).toBe(8);
    expect(findSum(10)).toBe(33);
  });
});
