import { expect } from 'vitest';
import greet from '.';

describe('greet', () => {
  it('should return greeting statement', () => {
    expect(greet('Ryan')).toBe('Hello, Ryan how are you doing today?');
    expect(greet('Shingles')).toBe('Hello, Shingles how are you doing today?');
  });
});
