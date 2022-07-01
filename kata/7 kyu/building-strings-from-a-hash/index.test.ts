import { expect } from 'vitest';
import solution from '.';

describe('solution', () => {
  it('should stringify object entries', () => {
    expect(solution({ a: 1, b: '2' })).toBe('a = 1,b = 2');
  });
});
