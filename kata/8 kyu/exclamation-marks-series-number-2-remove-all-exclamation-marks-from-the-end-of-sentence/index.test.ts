import { describe, expect, it } from 'vitest';
import remove from './index.ts';

describe('remove', () => {
  it('should all exclamation marks from the end of sentence', () => {
    expect.assertions(6);

    expect(remove('Hi!')).toBe('Hi');
    expect(remove('Hi!!!')).toBe('Hi');
    expect(remove('!Hi')).toBe('!Hi');
    expect(remove('!Hi!')).toBe('!Hi');
    expect(remove('Hi! Hi!')).toBe('Hi! Hi');
    expect(remove('Hi')).toBe('Hi');
  });
});
