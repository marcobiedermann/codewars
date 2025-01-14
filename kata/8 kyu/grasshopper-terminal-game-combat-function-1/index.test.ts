import { describe, expect, it } from 'vitest';
import combat from './index.ts';

describe('combat', () => {
  it('should calculate health after damage', () => {
    expect.assertions(3);

    expect(combat(100, 5)).toBe(95);
    expect(combat(92, 8)).toBe(84);
    expect(combat(20, 30)).toBe(0);
  });
});
