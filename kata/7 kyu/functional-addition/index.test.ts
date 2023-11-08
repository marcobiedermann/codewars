import { describe, expect, it } from 'vitest';
import add from '.';

describe('add', () => {
  it('should return a function that adds `n` to number', () => {
    expect.assertions(1);

    expect(add(1)(3)).toBe(4);
  });
});
