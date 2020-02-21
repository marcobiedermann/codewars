import check from '.';

describe('check', () => {
  it('should check if array contains value', () => {
    expect(check([66, 101], 66)).toEqual(true);
    expect(check([80, 117, 115, 104, 45, 85, 112, 115], 45)).toEqual(true);
    expect(check(['t', 'e', 's', 't'], 'e')).toEqual(true);
    expect(check(['what', 'a', 'great', 'kata'], 'kat')).toEqual(false);
  });
});
