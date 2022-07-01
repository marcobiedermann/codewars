import { expect } from 'vitest';
import halvingSum from '.';

describe('halvingSum', () => {
  it('should return sum of integer division', () => {
    expect(halvingSum(25)).toBe(47);
    expect(halvingSum(127)).toBe(247);
  });
});
