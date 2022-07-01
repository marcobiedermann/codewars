import { expect } from 'vitest';
import hello from '.';

describe('hello', () => {
  it('should return `Hello, world!` or `Hello, name!`', () => {
    expect(hello('johN')).toBe('Hello, John!');
    expect(hello('alice')).toBe('Hello, Alice!');
    expect(hello()).toBe('Hello, World!');
    expect(hello('')).toBe('Hello, World!');
  });
});
