import stringClean from '.';

describe('stringClean', () => {
  it('should remove numbers from string', () => {
    expect.assertions(11);

    expect(stringClean('')).toStrictEqual('');
    expect(stringClean('! !')).toStrictEqual('! !');
    expect(stringClean('123456789')).toStrictEqual('');
    expect(stringClean('(E3at m2e2!!)')).toStrictEqual('(Eat me!!)');
    expect(stringClean('Dsa32 cdsc34232 csa!!! 1I 4Am cool!')).toStrictEqual(
      'Dsa cdsc csa!!! I Am cool!',
    );
    expect(stringClean('A1 A1! AAA   3J4K5L@!!!')).toStrictEqual('A A! AAA   JKL@!!!');
    expect(stringClean('Adgre2321 A1sad! A2A3A4 fv3fdv3J544K5L@')).toStrictEqual(
      'Adgre Asad! AAA fvfdvJKL@',
    );
    expect(stringClean('Ad2dsad3ds21 A  1$$s122ad! A2A3Ae24 f44K5L@222222 ')).toStrictEqual(
      'Addsadds A  $$sad! AAAe fKL@ ',
    );
    expect(stringClean('33333Ad2dsad3ds21 A3333  1$$s122a!d! A2!A!3Ae$24 f2##222 ')).toStrictEqual(
      'Addsadds A  $$sa!d! A!A!Ae$ f## ',
    );
    expect(
      stringClean('My "me3ssy" d8ata issues2! Will1 th4ey ever, e3ver be3 so0lved?'),
    ).toStrictEqual('My "messy" data issues! Will they ever, ever be solved?');
    expect(stringClean("Wh7y can't we3 bu1y the goo0d software3? #cheapskates3")).toStrictEqual(
      "Why can't we buy the good software? #cheapskates",
    );
  });
});
