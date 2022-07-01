import DNAtoRNA from '.';

describe('dNAtoRNA', () => {
  it('should convert DNA to RNA by replacing `T` by `U`', () => {
    expect(DNAtoRNA('TTTT')).toBe('UUUU');
    expect(DNAtoRNA('GCAT')).toBe('GCAU');
    expect(DNAtoRNA('GACCGCCGCC')).toBe('GACCGCCGCC');
  });
});
