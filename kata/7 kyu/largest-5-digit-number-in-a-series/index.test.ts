import { describe, expect, it } from 'vitest';
import solution from './index.ts';

describe('solution', () => {
  it('should return max number with 5 digits in string', () => {
    expect.assertions(1);

    expect(solution('1234567890')).toBe(67890);
  });
});
