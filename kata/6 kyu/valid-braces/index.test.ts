import { expect } from 'vitest';
import validBraces from '.';

describe('validBraces', () => {
  it('should validate braces', () => {
    expect(validBraces('()')).toBe(true);
    expect(validBraces('[(])')).toBe(false);
  });
});
