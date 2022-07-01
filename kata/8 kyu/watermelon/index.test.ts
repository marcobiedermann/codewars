import { expect } from 'vitest';
import divide from '.';

describe('divide', () => {
  it('should check if number is evenly divisible', () => {
    expect(divide(4)).toBe(true);
    expect(divide(2)).toBe(false);
    expect(divide(5)).toBe(false);
    expect(divide(88)).toBe(true);
    expect(divide(100)).toBe(true);
    expect(divide(67)).toBe(false);
    expect(divide(90)).toBe(true);
    expect(divide(10)).toBe(true);
    expect(divide(99)).toBe(false);
    expect(divide(32)).toBe(true);
  });
});
