import { expect } from 'vitest';
import printArray from '.';

describe('printArray', () => {
  it('should join elements in array delimited by comma', () => {
    expect(printArray(['h', 'o', 'l', 'a'])).toBe('h,o,l,a');
    expect(printArray([2, 4, 5, 2])).toBe('2,4,5,2');
  });
});
