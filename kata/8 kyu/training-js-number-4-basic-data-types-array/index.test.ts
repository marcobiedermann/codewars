import { describe, expect, it } from 'vitest';
import { getFirst, getLast, getLength, popElement, pushElement } from '.';

describe('array', () => {
  it('should perform operations on array', () => {
    expect.assertions(5);

    expect(getLength([1, 2, 3])).toBe(3);
    expect(getFirst([1, 2, 3])).toBe(1);
    expect(getLast([1, 2, 3])).toBe(3);
    expect(pushElement([1, 2, 3])).toHaveLength(4);
    expect(popElement([1, 2, 3])).toHaveLength(2);
  });
});
