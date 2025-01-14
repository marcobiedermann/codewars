import { describe, expect, it } from 'vitest';
import addLetters from './index.ts';

describe('addLetters', () => {
  it('should add up letters to one letter', () => {
    expect.assertions(7);

    expect(addLetters('a', 'b', 'c')).toBe('f');
    expect(addLetters('z')).toBe('z');
    expect(addLetters('a', 'b')).toBe('c');
    expect(addLetters('c')).toBe('c');
    expect(addLetters('z', 'a')).toBe('a');
    expect(addLetters('y', 'c', 'b')).toBe('d');
    expect(addLetters()).toBe('z');
  });
});
