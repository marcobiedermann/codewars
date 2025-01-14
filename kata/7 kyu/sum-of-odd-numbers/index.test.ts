import { describe, expect, it } from 'vitest';
import rowSumOddNumbers from './index.ts';

describe('rowSumOddNumbers', () => {
  it('should return row sum of consecutive odd numbers', () => {
    expect.assertions(2);

    expect(rowSumOddNumbers(1)).toBe(1);
    expect(rowSumOddNumbers(42)).toBe(74088);
  });
});
