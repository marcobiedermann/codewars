import { describe, expect, it } from 'vitest';
import oddCount from './index.ts';

describe('oddCount', () => {
  it('should count odd numbers below `n`', () => {
    expect.assertions(2);

    expect(oddCount(15)).toBe(7);
    expect(oddCount(15023)).toBe(7511);
  });
});
