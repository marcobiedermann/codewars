import { expect } from 'vitest';
import oddCount from '.';

describe('oddCount', () => {
  it('should count odd numbers below `n`', () => {
    expect(oddCount(15)).toBe(7);
    expect(oddCount(15023)).toBe(7511);
  });
});
