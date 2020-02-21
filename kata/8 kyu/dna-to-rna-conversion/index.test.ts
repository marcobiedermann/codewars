import DNAtoRNA from '.';

describe('DNAtoRNA', () => {
  it('should convert DNA to RNA by replacing `T` by `U`', () => {
    expect(DNAtoRNA('TTTT')).toEqual('UUUU');
    expect(DNAtoRNA('GCAT')).toEqual('GCAU');
    expect(DNAtoRNA('GACCGCCGCC')).toEqual('GACCGCCGCC');
  });
});
