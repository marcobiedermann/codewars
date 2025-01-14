import { describe, expect, it } from 'vitest';
import grader from './index.ts';

describe('grader', () => {
  it('should return a grade based on the score', () => {
    expect.assertions(6);

    expect(grader(0)).toBe('F');
    expect(grader(1.1)).toBe('F');
    expect(grader(0.9)).toBe('A');
    expect(grader(0.8)).toBe('B');
    expect(grader(0.7)).toBe('C');
    expect(grader(0.6)).toBe('D');
  });
});
