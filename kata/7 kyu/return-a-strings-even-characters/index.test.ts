import { describe, expect, it } from 'vitest';
import evenChars from './index.ts';

describe('evenChars', () => {
  it('should return even characters', () => {
    expect.assertions(2);

    expect(evenChars('a')).toBe('invalid string');
    expect(evenChars('abcdefghijklm')).toStrictEqual(['b', 'd', 'f', 'h', 'j', 'l']);
  });
});
