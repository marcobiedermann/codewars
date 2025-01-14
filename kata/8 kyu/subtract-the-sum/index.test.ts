import { describe, expect, it } from 'vitest';
import SubtractSum from './index.ts';

describe('subtractSum', () => {
  it('should subtract the sum', () => {
    expect.assertions(2);

    expect(SubtractSum(10)).toBe('apple');
    expect(SubtractSum(325)).toBe('apple');
  });
});
