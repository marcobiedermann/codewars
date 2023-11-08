import { describe, expect, it } from 'vitest';
import scramble from '.';

describe('scramble', () => {
  it('should check if a portion of `str1` can be rearranged to match `str2`', () => {
    expect.assertions(9);

    expect(scramble('rkqodlw', 'world')).toBe(true);
    expect(scramble('cedewaraaossoqqyt', 'codewars')).toBe(true);
    expect(scramble('katas', 'steak')).toBe(false);
    expect(scramble('scriptjava', 'javascript')).toBe(true);
    expect(scramble('scriptingjava', 'javascript')).toBe(true);
    expect(scramble('scriptsjava', 'javascripts')).toBe(true);
    expect(scramble('jscripts', 'javascript')).toBe(false);
    expect(scramble('aabbcamaomsccdd', 'commas')).toBe(true);
    expect(scramble('scriptjavx', 'javascript')).toBe(false);
  });
});
