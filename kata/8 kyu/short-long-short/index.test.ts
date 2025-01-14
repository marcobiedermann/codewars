import { describe, expect, it } from 'vitest';
import solution from './index.ts';

describe('solution', () => {
  it('should join strings based on their length', () => {
    expect.assertions(4);

    expect(solution('45', '1')).toBe('1451');
    expect(solution('13', '200')).toBe('1320013');
    expect(solution('Soon', 'Me')).toBe('MeSoonMe');
    expect(solution('U', 'False')).toBe('UFalseU');
  });
});
