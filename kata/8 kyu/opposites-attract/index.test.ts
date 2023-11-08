import { describe, expect, it } from 'vitest';
import lovefunc from '.';

describe('lovefunc', () => {
  it('should check if one number is odd and one is even', () => {
    expect.assertions(4);

    expect(lovefunc(1, 4)).toBe(true);
    expect(lovefunc(2, 2)).toBe(false);
    expect(lovefunc(0, 1)).toBe(true);
    expect(lovefunc(0, 0)).toBe(false);
  });
});
