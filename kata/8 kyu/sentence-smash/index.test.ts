import { expect } from 'vitest';
import smash from '.';

describe('smash', () => {
  it('should smash words together', () => {
    expect(smash(['hello'])).toBe('hello');
    expect(smash(['hello', 'world'])).toBe('hello world');
  });
});
