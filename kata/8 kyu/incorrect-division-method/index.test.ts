import { describe, expect, it } from 'vitest';
import solve from '.';

describe('solve', () => {
  it('should divide its first argument by its second', () => {
    expect.assertions(7);

    expect(solve(2, 1)).toBe(2);
    expect(solve(2, 4)).toBe(0.5);
    expect(solve(42, 0)).toStrictEqual(Infinity);
    expect(solve(0, 8)).toBe(0);
    expect(solve(7, 2)).toBe(3.5);
    expect(solve(4.2, 1)).toBe(4.2);
    expect(solve(9999, 11)).toBe(909);
  });
});
