import { describe, expect, it } from 'vitest';
import nthEven from './index.ts';

describe('nthEven', () => {
  it('should return the nth even number', () => {
    expect.assertions(5);

    expect(nthEven(1)).toBe(0);
    expect(nthEven(2)).toBe(2);
    expect(nthEven(3)).toBe(4);

    expect(nthEven(100)).toBe(198);
    expect(nthEven(1298734)).toBe(2597466);
  });
});
