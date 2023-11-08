import { describe, expect, it } from 'vitest';
import getStrings from '.';

describe('getStrings', () => {
  it('should count occurrences of letters in string', () => {
    expect.assertions(3);

    expect(getStrings('Chicago')).toBe('c:**,h:*,i:*,a:*,g:*,o:*');
    expect(getStrings('Bangkok')).toBe('b:*,a:*,n:*,g:*,k:**,o:*');
    expect(getStrings('Las Vegas')).toBe('l:*,a:**,s:**,v:*,e:*,g:*');
  });
});
