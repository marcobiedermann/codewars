import { describe, expect, it } from 'vitest';
import validBraces from './index.ts';

describe('validBraces', () => {
  it('should validate braces', () => {
    expect.assertions(2);

    expect(validBraces('()')).toBe(true);
    expect(validBraces('[(])')).toBe(false);
  });
});
