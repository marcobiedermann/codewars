import { describe, expect, it } from 'vitest';
import validParentheses from './index.ts';

describe('validParentheses', () => {
  it('should if order of the parentheses is valid', () => {
    expect.assertions(2);

    expect(validParentheses('()')).toBe(true);
    expect(validParentheses('())')).toBe(false);
  });
});
