import { describe, expect, it } from 'vitest';
import halvingSum from './index.ts';

describe('halvingSum', () => {
  it('should return sum of integer division', () => {
    expect.assertions(2);

    expect(halvingSum(25)).toBe(47);
    expect(halvingSum(127)).toBe(247);
  });
});
