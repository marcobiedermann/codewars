import { describe, expect, it } from 'vitest';
import nbYear from './index.ts';

describe('nbYear', () => {
  it('should get years to reach population', () => {
    expect.assertions(3);

    expect(nbYear(1500, 5, 100, 5000)).toBe(15);
    expect(nbYear(1500000, 2.5, 10000, 2000000)).toBe(10);
    expect(nbYear(1500000, 0.25, 1000, 2000000)).toBe(94);
  });
});
