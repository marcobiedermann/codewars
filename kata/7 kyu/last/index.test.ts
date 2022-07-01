import { expect } from 'vitest';
import last from '.';

describe('last', () => {
  it('should get the last element of the given argument(s)', () => {
    expect(last([1, 2, 3, 4, 5])).toBe(5);
    expect(last('abcde')).toBe('e');
    expect(last(1, 'b', 3, 'd', 5)).toBe(5);
  });
});
