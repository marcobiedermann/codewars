import { describe, expect, it } from 'vitest';
import mygcd from './index.ts';

describe('mygcd', () => {
  it('should return greatest common divisor', () => {
    expect.assertions(3);

    expect(mygcd(30, 12)).toBe(6);
    expect(mygcd(8, 9)).toBe(1);
    expect(mygcd(1, 1)).toBe(1);
  });
});
