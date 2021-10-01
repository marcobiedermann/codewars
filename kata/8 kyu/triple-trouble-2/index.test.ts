import tripleTrouble from '.';

describe('tripleTrouble', () => {
  it('should combine all letters of the three strings', () => {
    expect.assertions(4);

    expect(tripleTrouble('this', 'test', 'lock')).toBe('ttlheoiscstk');
    expect(tripleTrouble('aa', 'bb', 'cc')).toBe('abcabc');
    expect(tripleTrouble('Bm', 'aa', 'tn')).toBe('Batman');
    expect(tripleTrouble('LLh', 'euo', 'xtr')).toBe('LexLuthor');
  });
});
