import DNAtoRNA from '.';

describe('dNAtoRNA', () => {
  it('should convert DNA to RNA by replacing `T` by `U`', () => {
    expect.assertions(3);

    expect(DNAtoRNA('TTTT')).toStrictEqual('UUUU');
    expect(DNAtoRNA('GCAT')).toStrictEqual('GCAU');
    expect(DNAtoRNA('GACCGCCGCC')).toStrictEqual('GACCGCCGCC');
  });
});
