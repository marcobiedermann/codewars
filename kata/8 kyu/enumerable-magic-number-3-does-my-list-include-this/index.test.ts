import { describe, expect, it } from 'vitest';
import include from '.';

describe('include', () => {
  it('should check if item is in list', () => {
    expect.assertions(2);

    expect(include([1, 2, 3, 4], 3)).toBe(true);
    expect(include([1, 2, 4, 5], 3)).toBe(false);
  });
});
