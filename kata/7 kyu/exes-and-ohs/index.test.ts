import { describe, expect, it } from 'vitest';
import XO from './index.ts';

describe('xo', () => {
  it('should check if string has the same amount of `x`s and `o`s', () => {
    expect.assertions(5);

    expect(XO('xo')).toBe(true);
    expect(XO('xxOo')).toBe(true);
    expect(XO('xxxm')).toBe(false);
    expect(XO('Oo')).toBe(false);
    expect(XO('ooom')).toBe(false);
  });
});
