import { describe, expect, it } from 'vitest';
import remove from './index.ts';

describe('remove', () => {
  it('should remove exclamation mark from the end of string', () => {
    expect.assertions(6);

    expect(remove('Hi!')).toBe('Hi');
    expect(remove('Hi!!!')).toBe('Hi!!');
    expect(remove('!Hi')).toBe('!Hi');
    expect(remove('!Hi!')).toBe('!Hi');
    expect(remove('Hi! Hi!')).toBe('Hi! Hi');
    expect(remove('Hi')).toBe('Hi');
  });
});
