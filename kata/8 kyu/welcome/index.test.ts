import { describe, expect, it } from 'vitest';
import greet from '.';

describe('greet', () => {
  it('should translate `Welcome`', () => {
    expect.assertions(3);

    expect(greet('english')).toBe('Welcome');
    expect(greet('dutch')).toBe('Welkom');
    expect(greet('IP_ADDRESS_INVALID')).toBe('Welcome');
  });
});
