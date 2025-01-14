import { describe, expect, it } from 'vitest';
import addFive from './index.ts';

describe('addFive', () => {
  it('should add `5` to the given number', () => {
    expect.assertions(3);

    expect(addFive(5)).toBe(10);
    expect(addFive(0)).toBe(5);
    expect(addFive(-5)).toBe(0);
  });
});
