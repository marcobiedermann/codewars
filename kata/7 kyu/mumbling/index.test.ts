import accum from '.';

describe('accum', () => {
  it('should mumble string', () => {
    expect.assertions(5);

    expect(accum('ZpglnRxqenU')).toStrictEqual(
      'Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu',
    );
    expect(accum('NyffsGeyylB')).toStrictEqual(
      'N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb',
    );
    expect(accum('MjtkuBovqrU')).toStrictEqual(
      'M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu',
    );
    expect(accum('EvidjUnokmM')).toStrictEqual(
      'E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm',
    );
    expect(accum('HbideVbxncC')).toStrictEqual(
      'H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc',
    );
  });
});
