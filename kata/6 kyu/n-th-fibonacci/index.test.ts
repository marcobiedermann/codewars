import { describe, expect, it } from 'vitest';
import nthFibo from './index.ts';

describe('nthFibo', () => {
  it('should return the nth Fibonacci number', () => {
    expect.assertions(4);

    expect(nthFibo(1)).toBe(0);
    expect(nthFibo(2)).toBe(1);
    expect(nthFibo(3)).toBe(1);
    expect(nthFibo(4)).toBe(2);
  });
});
