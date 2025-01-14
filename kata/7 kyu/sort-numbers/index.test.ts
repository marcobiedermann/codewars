import { describe, expect, it } from 'vitest';
import solution from './index.ts';

describe('solution', () => {
  it('should sort numbers', () => {
    expect.assertions(2);

    expect(solution([1, 2, 10, 50, 5])).toStrictEqual([1, 2, 5, 10, 50]);
    expect(solution(null)).toStrictEqual([]);
  });
});
