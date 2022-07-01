import { expect } from 'vitest';
import firstNonConsecutive from '.';

describe('firstNonConsecutive', () => {
  it('should find first non consecutive element', () => {
    expect(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8])).toBe(6);
  });
});
