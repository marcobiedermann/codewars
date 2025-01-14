import { describe, expect, it } from 'vitest';
import check from './index.ts';

describe('check', () => {
  it('should check if array includes values', () => {
    expect.assertions(4);

    expect(check([66, 101], 66)).toBe(true);
    expect(check([80, 117, 115, 104, 45, 85, 112, 115], 45)).toBe(true);
    expect(check(['t', 'e', 's', 't'], 'e')).toBe(true);
    expect(check(['what', 'a', 'great', 'kata'], 'kat')).toBe(false);
  });
});
