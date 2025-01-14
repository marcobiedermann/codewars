import { describe, expect, it } from 'vitest';
import groupByCommas from './index.ts';

describe('groupByCommas', () => {
  it('should', () => {
    expect.assertions(8);

    expect(groupByCommas(1)).toBe('1');
    expect(groupByCommas(10)).toBe('10');
    expect(groupByCommas(100)).toBe('100');
    expect(groupByCommas(1000)).toBe('1,000');
    expect(groupByCommas(10000)).toBe('10,000');
    expect(groupByCommas(100000)).toBe('100,000');
    expect(groupByCommas(1000000)).toBe('1,000,000');
    expect(groupByCommas(35235235)).toBe('35,235,235');
  });
});
