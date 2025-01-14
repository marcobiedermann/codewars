import { describe, expect, it } from 'vitest';
import solution from './index.ts';

describe('solution', () => {
  it('should reverse string', () => {
    expect.assertions(1);

    expect(solution('world')).toBe('dlrow');
  });
});
