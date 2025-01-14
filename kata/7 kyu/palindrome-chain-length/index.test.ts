import { describe, expect, it } from 'vitest';
import palindromeChainLength from './index.ts';

describe('palindromeChainLength', () => {
  it('should', () => {
    expect.assertions(1);

    expect(palindromeChainLength(87)).toBe(4);
  });
});
