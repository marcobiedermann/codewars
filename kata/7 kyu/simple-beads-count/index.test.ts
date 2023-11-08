import { describe, expect, it } from 'vitest';
import countRedBeads from '.';

describe('countRedBeads', () => {
  it('should count red beads', () => {
    expect.assertions(4);

    expect(countRedBeads(0)).toBe(0);
    expect(countRedBeads(1)).toBe(0);
    expect(countRedBeads(3)).toBe(4);
    expect(countRedBeads(5)).toBe(8);
  });
});
