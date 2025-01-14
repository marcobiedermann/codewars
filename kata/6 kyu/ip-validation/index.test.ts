import { describe, expect, it } from 'vitest';
import isValidIP from './index.ts';

describe('isValidIP', () => {
  it('should check if IP is valid', () => {
    expect.assertions(17);

    expect(isValidIP('0.0.0.0')).toBe(true);
    expect(isValidIP('12.255.56.1')).toBe(true);
    expect(isValidIP('137.255.156.100')).toBe(true);

    expect(isValidIP('')).toBe(false);
    expect(isValidIP('abc.def.ghi.jkl')).toBe(false);
    expect(isValidIP('123.456.789.0')).toBe(false);
    expect(isValidIP('12.34.56')).toBe(false);
    expect(isValidIP('01.02.03.04')).toBe(false);
    expect(isValidIP('256.1.2.3')).toBe(false);
    expect(isValidIP('1.2.3.4.5')).toBe(false);
    expect(isValidIP('123,45,67,89')).toBe(false);
    expect(isValidIP('1e0.1e1.1e2.2e2')).toBe(false);
    expect(isValidIP(' 1.2.3.4')).toBe(false);
    expect(isValidIP('1.2.3.4 ')).toBe(false);
    expect(isValidIP('12.34.56.-7')).toBe(false);
    expect(isValidIP('1.2.3.4\n')).toBe(false);
    expect(isValidIP('\n1.2.3.4')).toBe(false);
  });
});
