import { describe, expect, it } from 'vitest';
import finalGrade from './index.ts';

describe('finalGrade', () => {
  it('should calculate final grade', () => {
    expect.assertions(4);

    expect(finalGrade(100, 12)).toBe(100);
    expect(finalGrade(85, 5)).toBe(90);
    expect(finalGrade(55, 3)).toBe(75);
    expect(finalGrade(55, 0)).toBe(0);
  });
});
