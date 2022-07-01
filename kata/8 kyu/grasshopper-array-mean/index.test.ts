import { expect } from 'vitest';
import findAverage from '.';

describe('findAverage', () => {
  it('should find the average of numners', () => {
    expect(findAverage([1])).toBe(1);
    expect(findAverage([1, 3, 5, 7])).toBe(4);
  });
});
