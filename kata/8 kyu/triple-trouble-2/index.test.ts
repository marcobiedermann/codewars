import tripleTrouble from '.';

describe('tripleTrouble', () => {
  it('should combine all letters of the three strings', () => {
    expect.assertions(4);

    expect(tripleTrouble('this', 'test', 'lock')).toStrictEqual('ttlheoiscstk');
    expect(tripleTrouble('aa', 'bb', 'cc')).toStrictEqual('abcabc');
    expect(tripleTrouble('Bm', 'aa', 'tn')).toStrictEqual('Batman');
    expect(tripleTrouble('LLh', 'euo', 'xtr')).toStrictEqual('LexLuthor');
  });
});
