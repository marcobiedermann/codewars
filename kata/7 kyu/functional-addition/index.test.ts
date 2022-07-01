import { expect } from 'vitest';
import add from '.';

describe('add', () => {
  it('should return a function that adds `n` to number', () => {
    expect(add(1)(3)).toBe(4);
  });
});
