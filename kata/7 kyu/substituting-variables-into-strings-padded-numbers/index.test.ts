import { describe, expect, it } from 'vitest';
import solution from '.';

describe('solution', () => {
  it('should return a 5 digit padded number', () => {
    expect.assertions(4);

    expect(solution(5)).toBe('Value is 00005');
    expect(solution(1204)).toBe('Value is 01204');
    expect(solution(109)).toBe('Value is 00109');
    expect(solution(0)).toBe('Value is 00000');
  });
});
