import { describe, expect, it } from 'vitest';
import isUpperCase from '.';

describe('isUpperCase', () => {
  it('should work for the examples provided in the description', () => {
    expect.assertions(7);

    expect(isUpperCase('')).toBeDefined();
    expect(isUpperCase('c')).toBe(false);
    expect(isUpperCase('C')).toBe(true);
    expect(isUpperCase('hello I AM DONALD')).toBe(false);
    expect(isUpperCase('HELLO I AM DONALD')).toBe(true);
    expect(isUpperCase('ACSKLDFJSgSKLDFJSKLDFJ')).toBe(false);
    expect(isUpperCase('ACSKLDFJSGSKLDFJSKLDFJ')).toBe(true);
  });

  it('should also work for a few other basic tests', () => {
    expect.assertions(18);

    expect(isUpperCase('Hello World')).toBe(false);
    expect(isUpperCase('hello world')).toBe(false);
    expect(isUpperCase('Hello world')).toBe(false);
    expect(isUpperCase('hello World')).toBe(false);
    expect(isUpperCase('HELLO WORLD')).toBe(true);
    expect(isUpperCase('Bob walks his dog every day.')).toBe(false);
    expect(isUpperCase('BOB walks his dog every day.')).toBe(false);
    expect(isUpperCase('BOB WALKS HIS DOG EVERY DAY.')).toBe(true);
    expect(isUpperCase('BOB WALKs HIS DOG EVERY DAY.')).toBe(false);
    expect(isUpperCase('#lovewins')).toBe(false);
    expect(isUpperCase('#Lovewins')).toBe(false);
    expect(isUpperCase('#loveWins')).toBe(false);
    expect(isUpperCase('#LoveWins')).toBe(false);
    expect(isUpperCase('#LOVEWins')).toBe(false);
    expect(isUpperCase('#LoveWINS')).toBe(false);
    expect(isUpperCase('#LOVEWINs')).toBe(false);
    expect(isUpperCase('#lOVEWINS')).toBe(false);
    expect(isUpperCase('#LOVEWINS')).toBe(true);
  });
});
