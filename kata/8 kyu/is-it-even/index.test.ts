import { describe, expect, it } from 'vitest';
import testEven from './index.ts';

describe('testEven', () => {
  it('should check if number is even', () => {
    expect.assertions(5);

    expect(testEven(0)).toBe(true);
    expect(testEven(0.5)).toBe(false);
    expect(testEven(1)).toBe(false);
    expect(testEven(2)).toBe(true);
    expect(testEven(-4)).toBe(true);
  });
});
