import { expect } from 'vitest';
import doubleInteger from '.';

describe('doubleInteger', () => {
  it('should double integer', () => {
    expect(doubleInteger(2)).toBe(4);
  });
});
