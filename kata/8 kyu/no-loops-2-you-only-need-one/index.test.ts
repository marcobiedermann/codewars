import check from '.';

describe('check', () => {
  it('should check if array includes values', () => {
    expect.assertions(4);

    expect(check([66, 101], 66)).toStrictEqual(true);
    expect(check([80, 117, 115, 104, 45, 85, 112, 115], 45)).toStrictEqual(true);
    expect(check(['t', 'e', 's', 't'], 'e')).toStrictEqual(true);
    expect(check(['what', 'a', 'great', 'kata'], 'kat')).toStrictEqual(false);
  });
});
