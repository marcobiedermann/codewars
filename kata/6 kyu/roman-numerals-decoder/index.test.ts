import { describe, expect, it } from 'vitest';
import solution from '.';

describe('solution', () => {
  it('should decode roman number', () => {
    expect.assertions(5);

    expect(solution('XXI')).toBe(21);
    expect(solution('I')).toBe(1);
    expect(solution('IV')).toBe(4);
    expect(solution('MMVIII')).toBe(2008);
    expect(solution('MDCLXVI')).toBe(1666);
  });
});
