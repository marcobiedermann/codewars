import { describe, expect, it } from 'vitest';
import fibonacci from './index.ts';

describe('fibonacci', () => {
  it('should calculate the nth fibonacci number', () => {
    expect.assertions(9);

    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(1)).toBe(1);
    expect(fibonacci(5)).toBe(5);
    expect(fibonacci(10)).toBe(55);
    expect(fibonacci(15)).toBe(610);
    expect(fibonacci(20)).toBe(6765);
    expect(fibonacci(50)).toBe(12586269025);
    expect(fibonacci(60)).toBe(1548008755920);
    expect(fibonacci(70)).toBe(190392490709135);
  });
});
