import { describe, expect, it } from 'vitest';
import xor from '.';

describe('xor', () => {
  it('should return `true` if exactly one of the two expressions evaluate to `true`', () => {
    expect.assertions(4);

    expect(xor(false, false)).toBe(false);
    expect(xor(true, false)).toBe(true);
    expect(xor(false, true)).toBe(true);
    expect(xor(true, true)).toBe(false);
  });
});
