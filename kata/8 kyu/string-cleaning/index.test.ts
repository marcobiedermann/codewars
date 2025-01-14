import { describe, expect, it } from 'vitest';
import stringClean from './index.ts';

describe('stringClean', () => {
  it('should remove numbers from string', () => {
    expect.assertions(11);

    expect(stringClean('')).toBe('');
    expect(stringClean('! !')).toBe('! !');
    expect(stringClean('123456789')).toBe('');
    expect(stringClean('(E3at m2e2!!)')).toBe('(Eat me!!)');
    expect(stringClean('Dsa32 cdsc34232 csa!!! 1I 4Am cool!')).toBe('Dsa cdsc csa!!! I Am cool!');
    expect(stringClean('A1 A1! AAA   3J4K5L@!!!')).toBe('A A! AAA   JKL@!!!');
    expect(stringClean('Adgre2321 A1sad! A2A3A4 fv3fdv3J544K5L@')).toBe(
      'Adgre Asad! AAA fvfdvJKL@',
    );
    expect(stringClean('Ad2dsad3ds21 A  1$$s122ad! A2A3Ae24 f44K5L@222222 ')).toBe(
      'Addsadds A  $$sad! AAAe fKL@ ',
    );
    expect(stringClean('33333Ad2dsad3ds21 A3333  1$$s122a!d! A2!A!3Ae$24 f2##222 ')).toBe(
      'Addsadds A  $$sa!d! A!A!Ae$ f## ',
    );
    expect(stringClean('My "me3ssy" d8ata issues2! Will1 th4ey ever, e3ver be3 so0lved?')).toBe(
      'My "messy" data issues! Will they ever, ever be solved?',
    );
    expect(stringClean("Wh7y can't we3 bu1y the goo0d software3? #cheapskates3")).toBe(
      "Why can't we buy the good software? #cheapskates",
    );
  });
});
