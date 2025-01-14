import { describe, expect, it } from 'vitest';
import isSquare from './index.ts';

describe('isSquare', () => {
  it('should check if number is square', () => {
    expect.assertions(6);

    expect(isSquare(-1)).toBe(false);
    expect(isSquare(0)).toBe(true);
    expect(isSquare(3)).toBe(false);
    expect(isSquare(4)).toBe(true);
    expect(isSquare(25)).toBe(true);
    expect(isSquare(26)).toBe(false);
  });
});
