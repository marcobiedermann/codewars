import reverseLetter from '.';

describe('reverseLetter', () => {
  it('should reverse string, ommitting all non-alphabetic characters', () => {
    expect.assertions(4);

    expect(reverseLetter('krishan')).toStrictEqual('nahsirk');
    expect(reverseLetter('ultr53o?n')).toStrictEqual('nortlu');
    expect(reverseLetter('ab23c')).toStrictEqual('cba');
    expect(reverseLetter('krish21an')).toStrictEqual('nahsirk');
  });
});
