import { describe, expect, it } from 'vitest';
import makeNegative from './index.ts';

describe('makeNegative', () => {
  it('should make the number negative', () => {
    expect.assertions(4);

    expect(makeNegative(42)).toBe(-42);
    expect(makeNegative(-5)).toBe(-5);
    expect(makeNegative(0)).toBe(0);
    expect(makeNegative(0.12)).toBe(-0.12);
  });
});
