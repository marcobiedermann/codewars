import { describe, expect, it } from 'vitest';
import f from '.';

describe('f', () => {
  it('should sum up all number through `n`', () => {
    expect.assertions(8);

    expect(f(100)).toBe(5050);
    expect(f(300)).toBe(45150);
    expect(f(50000)).toBe(1250025000);
    expect(f('n')).toBe(false);
    expect(f()).toBe(false);
    expect(f(3.14)).toBe(false);
    expect(f(0)).toBe(false);
    expect(f(-10)).toBe(false);
  });
});
