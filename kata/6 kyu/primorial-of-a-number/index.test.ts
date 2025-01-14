import { describe, expect, it } from 'vitest';
import numPrimorial from './index.ts';

describe('numPrimorial', () => {
  it('should return primorial of `n`', () => {
    expect.assertions(5);

    expect(numPrimorial(3)).toBe(30);
    expect(numPrimorial(4)).toBe(210);
    expect(numPrimorial(5)).toBe(2310);
    expect(numPrimorial(8)).toBe(9699690);
    expect(numPrimorial(9)).toBe(223092870);
  });
});
