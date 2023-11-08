import { describe, expect, it } from 'vitest';
import validateUsr from '.';

describe('validateUsr', () => {
  it('should validate username', () => {
    expect.assertions(10);

    expect(validateUsr('asddsa')).toBe(true);
    expect(validateUsr('a')).toBe(false);
    expect(validateUsr('Hass')).toBe(false);
    expect(validateUsr('Hasd_12assssssasasasasasaasasasasas')).toBe(false);
    expect(validateUsr('')).toBe(false);
    expect(validateUsr('____')).toBe(true);
    expect(validateUsr('012')).toBe(false);
    expect(validateUsr('p1pp1')).toBe(true);
    expect(validateUsr('asd43 34')).toBe(false);
    expect(validateUsr('asd43_34')).toBe(true);
  });
});
