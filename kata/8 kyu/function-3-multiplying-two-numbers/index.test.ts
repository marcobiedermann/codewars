import { expect } from 'vitest';
import multiply from '.';

describe('multiply', () => {
  it('should multiply two numbers', () => {
    expect(multiply(1, 2)).toBe(2);
  });
});
