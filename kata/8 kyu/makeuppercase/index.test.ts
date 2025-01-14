import { describe, expect, it } from 'vitest';
import makeUpperCase from './index.ts';

describe('makeUpperCase', () => {
  it('should transform string to uppercase', () => {
    expect.assertions(1);

    expect(makeUpperCase('hello')).toBe('HELLO');
  });
});
