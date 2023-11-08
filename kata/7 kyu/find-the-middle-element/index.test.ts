import { describe, expect, it } from 'vitest';
import gimme from '.';

describe('gimme', () => {
  it('should return middle element of triplet', () => {
    expect.assertions(2);

    expect(gimme([2, 3, 1])).toBe(0);
    expect(gimme([5, 10, 14])).toBe(1);
  });
});
