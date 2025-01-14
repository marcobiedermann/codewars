import { describe, expect, it } from 'vitest';
import modifiedSum from './index.ts';

describe('modifiedSum', () => {
  it('should return modified sum', () => {
    expect.assertions(2);

    expect(modifiedSum([1, 2, 3], 3)).toBe(30);
    expect(modifiedSum([1, 2], 5)).toBe(30);
  });
});
