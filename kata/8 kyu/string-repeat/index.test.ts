import { expect } from 'vitest';
import repeatStr from '.';

describe('repeatStr', () => {
  it('should repeat string by count', () => {
    expect(repeatStr(3, '*')).toBe('***');
    expect(repeatStr(5, '#')).toBe('#####');
    expect(repeatStr(2, 'ha ')).toBe('ha ha ');
  });
});
