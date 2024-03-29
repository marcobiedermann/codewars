import { describe, expect, it } from 'vitest';
import inAscOrder from '.';

describe('inAscOrder', () => {
  it('should check if numbers are in order', () => {
    expect.assertions(4);

    expect(inAscOrder([1, 2, 4, 7, 19])).toBe(true);
    expect(inAscOrder([1, 2, 3, 4, 5])).toBe(true);
    expect(inAscOrder([1, 6, 10, 18, 2, 4, 20])).toBe(false);
    expect(inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1])).toBe(false);
  });
});
