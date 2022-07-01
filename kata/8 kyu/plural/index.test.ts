import { expect } from 'vitest';
import plural from '.';

describe('plural', () => {
  it('should check if plural should be used', () => {
    expect(plural(0)).toBe(true);
    expect(plural(0.5)).toBe(true);
    expect(plural(1)).toBe(false);
    expect(plural(100)).toBe(true);
    expect(plural(Infinity)).toBe(true);
  });
});
