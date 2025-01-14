import { describe, expect, it } from 'vitest';
import doubleChar from './index.ts';

describe('doubleChar', () => {
  it('should repeat each character in string', () => {
    expect.assertions(6);

    expect(doubleChar('abcd')).toBe('aabbccdd');
    expect(doubleChar('Adidas')).toBe('AAddiiddaass');
    expect(doubleChar('1337')).toBe('11333377');
    expect(doubleChar('illuminati')).toBe('iilllluummiinnaattii');
    expect(doubleChar('123456')).toBe('112233445566');
    expect(doubleChar('%^&*(')).toBe('%%^^&&**((');
  });
});
