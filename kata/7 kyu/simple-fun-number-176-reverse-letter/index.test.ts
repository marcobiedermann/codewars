import reverseLetter from '.';

describe('reverseLetter', () => {
  it('should reverse string, ommitting all non-alphabetic characters', () => {
    expect(reverseLetter('krishan')).toBe('nahsirk');
    expect(reverseLetter('ultr53o?n')).toBe('nortlu');
    expect(reverseLetter('ab23c')).toBe('cba');
    expect(reverseLetter('krish21an')).toBe('nahsirk');
  });
});
