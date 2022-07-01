import { expect } from 'vitest';
import makeUpperCase from '.';

describe('makeUpperCase', () => {
  it('should transform string to uppercase', () => {
    expect(makeUpperCase('hello')).toBe('HELLO');
  });
});
