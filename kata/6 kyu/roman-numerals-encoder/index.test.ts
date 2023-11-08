import { describe, expect, it } from 'vitest';
import solution from '.';

describe('solution', () => {
  it('should handle small numbers', () => {
    expect.assertions(11);

    expect(solution(1)).toBe('I');
    expect(solution(2)).toBe('II');
    expect(solution(3)).toBe('III');
    expect(solution(4)).toBe('IV');
    expect(solution(5)).toBe('V');
    expect(solution(9)).toBe('IX');
    expect(solution(10)).toBe('X');
    expect(solution(11)).toBe('XI');
    expect(solution(19)).toBe('XIX');
    expect(solution(22)).toBe('XXII');
    expect(solution(15)).toBe('XV');
  });

  it('should handle large numbers', () => {
    expect.assertions(5);

    expect(solution(1000)).toBe('M');
    expect(solution(1001)).toBe('MI');
    expect(solution(1990)).toBe('MCMXC');
    expect(solution(2007)).toBe('MMVII');
    expect(solution(2008)).toBe('MMVIII');
  });
});
