import { describe, expect, it } from 'vitest';
import hello from '.';

describe('hello', () => {
  it('should return `Hello, world!` or `Hello, name!`', () => {
    expect.assertions(4);

    expect(hello('johN')).toBe('Hello, John!');
    expect(hello('alice')).toBe('Hello, Alice!');
    expect(hello()).toBe('Hello, World!');
    expect(hello('')).toBe('Hello, World!');
  });
});
