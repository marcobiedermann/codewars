import { describe, expect, it } from 'vitest';
import reverseLetter from './index.ts';

describe('reverseLetter', () => {
  it('should reverse string, ommitting all non-alphabetic characters', () => {
    expect.assertions(4);

    expect(reverseLetter('krishan')).toBe('nahsirk');
    expect(reverseLetter('ultr53o?n')).toBe('nortlu');
    expect(reverseLetter('ab23c')).toBe('cba');
    expect(reverseLetter('krish21an')).toBe('nahsirk');
  });
});
