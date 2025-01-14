import { describe, expect, it } from 'vitest';
import square from './index.ts';

describe('square', () => {
  it('should return square', () => {
    expect.assertions(1);

    expect(square(3)).toBe(9);
  });
});
