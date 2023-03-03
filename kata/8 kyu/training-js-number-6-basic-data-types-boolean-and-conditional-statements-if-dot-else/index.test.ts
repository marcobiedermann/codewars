/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-bitwise */

// @ts-nocheck

import trueOrFalse from '.';

describe('trueOrFalse', () => {
  it('should test for equations and inequalities', () => {
    expect.assertions(10);

    const a = 1;
    const b = 2;
    const c = 1;

    expect(trueOrFalse(a > b)).toBe('false');
    expect(trueOrFalse(a === b)).toBe('false');
    expect(trueOrFalse(a < b)).toBe('true');
    expect(trueOrFalse(a !== b)).toBe('true');
    expect(trueOrFalse(b > c)).toBe('true');
    expect(trueOrFalse(b === c)).toBe('false');
    expect(trueOrFalse(b < c)).toBe('false');
    expect(trueOrFalse(b !== c)).toBe('true');
    expect(trueOrFalse(a === c)).toBe('true');
    expect(trueOrFalse(a !== c)).toBe('false');
  });

  it('should test for logical operators and bitwise operators', () => {
    expect.assertions(17);

    const t = true;
    const f = false;

    expect(trueOrFalse(t && f)).toBe('false');
    expect(trueOrFalse(f && f)).toBe('false');
    expect(trueOrFalse(t && t)).toBe('true');
    expect(trueOrFalse(t || f)).toBe('true');
    expect(trueOrFalse(t || t)).toBe('true');
    expect(trueOrFalse(f || f)).toBe('false');
    expect(trueOrFalse(t & f)).toBe('false');
    expect(trueOrFalse(t & t)).toBe('true');
    expect(trueOrFalse(f & f)).toBe('false');
    expect(trueOrFalse(t | f)).toBe('true');
    expect(trueOrFalse(t | t)).toBe('true');
    expect(trueOrFalse(f | f)).toBe('false');
    expect(trueOrFalse(!t)).toBe('false');
    expect(trueOrFalse(!f)).toBe('true');
    expect(trueOrFalse(t ^ f)).toBe('true');
    expect(trueOrFalse(t ^ t)).toBe('false');
    expect(trueOrFalse(f ^ f)).toBe('false');
  });

  it('should test for implicit conversion', () => {
    expect.assertions(11);

    expect(trueOrFalse(true)).toBe('true');
    expect(trueOrFalse(123)).toBe('true');
    expect(trueOrFalse('123')).toBe('true');
    expect(trueOrFalse(['123'])).toBe('true');
    expect(trueOrFalse('false')).toBe('true');
    expect(trueOrFalse(false)).toBe('false');
    expect(trueOrFalse(0)).toBe('false');
    expect(trueOrFalse('')).toBe('false');
    expect(trueOrFalse(null)).toBe('false');
    expect(trueOrFalse([].length)).toBe('false');
    expect(trueOrFalse(undefined)).toBe('false');
  });
});
