import { describe, expect, it } from 'vitest';
import dative from '.';

describe('dative', () => {
  it('should return the valid form of a valid Hungarian word', () => {
    expect.assertions(9);

    expect(dative('ablak')).toBe('ablaknak');
    expect(dative('tükör')).toBe('tükörnek');
    expect(dative('keret')).toBe('keretnek');
    expect(dative('otthon')).toBe('otthonnak');
    expect(dative('virág')).toBe('virágnak');
    expect(dative('tett')).toBe('tettnek');
    expect(dative('rokkant')).toBe('rokkantnak');
    expect(dative('rossz')).toBe('rossznak');
    expect(dative('gonosz')).toBe('gonosznak');
  });
});
