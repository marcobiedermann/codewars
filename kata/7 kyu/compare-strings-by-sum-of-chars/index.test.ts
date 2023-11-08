import { describe, expect, it } from 'vitest';
import compare from '.';

describe('compare', () => {
  it('should compare two strings by their values', () => {
    expect.assertions(4);

    expect(compare('AD', 'BC')).toBe(true);
    expect(compare('AD', 'DD')).toBe(false);
    expect(compare('!!', '??')).toBe(true);
    expect(compare(null, null)).toBe(true);
  });
});
