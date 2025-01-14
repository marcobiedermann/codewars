import { describe, expect, it } from 'vitest';
import smash from './index.ts';

describe('smash', () => {
  it('should smash words together', () => {
    expect.assertions(2);

    expect(smash(['hello'])).toBe('hello');
    expect(smash(['hello', 'world'])).toBe('hello world');
  });
});
