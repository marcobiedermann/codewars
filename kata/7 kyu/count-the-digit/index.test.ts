import { describe, expect, it } from 'vitest';
import nbDig from './index.ts';

describe('nbDig', () => {
  it('should count all digits used in writing all `k**2`', () => {
    expect.assertions(4);

    expect(nbDig(5750, 0)).toBe(4700);
    expect(nbDig(11011, 2)).toBe(9481);
    expect(nbDig(12224, 8)).toBe(7733);
    expect(nbDig(11549, 1)).toBe(11905);
  });
});
