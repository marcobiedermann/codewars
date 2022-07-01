import { expect } from 'vitest';
import square from '.';

describe('square', () => {
  it('should return square', () => {
    expect(square(3)).toBe(9);
  });
});
