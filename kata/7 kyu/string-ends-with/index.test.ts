import { describe, expect, it } from 'vitest';
import solution from './index.ts';

describe('solution', () => {
  it('should check if string end with', () => {
    expect.assertions(2);

    expect(solution('abcde', 'cde')).toBe(true);
    expect(solution('abcde', 'abc')).toBe(false);
  });
});
