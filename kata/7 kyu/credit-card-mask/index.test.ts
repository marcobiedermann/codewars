import { expect } from 'vitest';
import maskify from '.';

describe('maskify', () => {
  it('should change all but last four characters into `#`', () => {
    expect(maskify('4556364607935616')).toBe('############5616');
    expect(maskify('1')).toBe('1');
    expect(maskify('11111')).toBe('#1111');
  });
});
